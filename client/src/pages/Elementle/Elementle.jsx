import { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import styles from './Elementle.module.css';
import elements from '../../data/elements.js';
import WinScreen from '../../components/WinScreen/WinScreen.jsx';
const Elementle = () => {
    const currentDate = new Date().toDateString();
    const storedData = localStorage.getItem("elementleData");
    const initialData = storedData ? JSON.parse(storedData) : { guesses: [], win: false, correctElement: null, inputValue: '', currentDate: currentDate,disableInput: false };

    const [inputValue,setInputValue] = useState(initialData.inputValue);
    const [guesses, setGuesses] = useState(initialData.guesses);
    const [disableInput, setDisableInput] = useState(initialData.disableInput);
    const [correctElement,setCorrectElement] = useState(initialData.correctElement);
    const [win,setWin] = useState(initialData.win)
    const [oldDate, setOldDate] = useState(initialData.currentDate);
    
    useEffect(()=>{
        if(initialData.currentDate !== oldDate){
            localStorage.clear();
        }
    },)

    useEffect(()=>{
            localStorage.setItem(
                "elementleData",
                JSON.stringify({
                    guesses,win,correctElement,inputValue,currentDate
                })
            );
    },[guesses, win, correctElement, inputValue,currentDate]);
    
    useEffect(() => {
        const storedData = localStorage.getItem("elementleData");
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            setGuesses(parsedData.guesses);
            setWin(parsedData.win);
            setCorrectElement(parsedData.correctElement);
            setInputValue(parsedData.inputValue)
            // Update oldDate only if it's not already set
            setOldDate(oldDate => oldDate || parsedData.currentDate);
            if (currentDate !== oldDate) {
                setDisableInput(false);
                localStorage.clear();
            }
        }
    }, [currentDate, oldDate]);
    useEffect(() => {
        if (guesses.length > 0) {
           // just be
        }
    }, [guesses]);
    useEffect(() =>{
        if(correctElement !== null){
            setInputValue('');
        } 
    },[correctElement]);
    useEffect(() => {
        if (win) {
            setTimeout(()=>{
                //alert("Congrats! You've won today's game! Come back tomorrow for another game!");
                setDisableInput(true);
            },100)
        }
    }, [win]);
    useEffect(() => {
        if (correctElement !== null && guesses !== null && guesses.length > 0) {
            const userGuessElement = guesses[guesses.length - 1];
            if (userGuessElement && userGuessElement.nazwa === correctElement.nazwa) {
                setWin(true);
            }
        }
    }, [correctElement, guesses]);
    
    
    const ElementleHandler = async (event) => {
        event.preventDefault();
        try {
            const regex = new RegExp('^[\\p{L}]+$', 'u');
            const match = inputValue.match(regex);
            if (match) {
                const userGuess = match[0];
                const response = await fetch(
                    'http://localhost:3000/elementle',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ key: 'value' }),
                    }
                );
                const responseData = await response.json();
                setCorrectElement(responseData.correctElement);
                
               
                const userGuessElement = elements.find(
                    (element) =>
                        element.nazwa.toLowerCase() ===
                        userGuess.toLowerCase()
                );
    
                if (userGuessElement) {
                    setGuesses([...guesses, userGuessElement]);
                        setWin(true);
                }
            }
            setInputValue(''); // Move this line outside of the if statement
        } catch (error) {
            console.error('Error:', error);
        }
    };
    
    return (
        <>
            <Header />
            {win && <WinScreen />}
            <div className={styles.elementle}>
                <div className={styles.wrapper}>
                    <img
                        src="images/logo.png"
                        alt="img"
                        className={styles.img}
                    />
                    <h2 className={styles.mainText}>Elementle</h2>
                </div>
                <div className={styles.mainBlock}>
                    <div className={styles.imgWrapper}>
                        <img
                            id="inputImage"
                            src="images/question-mark.svg"
                            alt="question-mark"
                        />
                    </div>
                    <div className={styles.formWrapper}>
                        <form
                            id="form"
                            method="POST"
                            onSubmit={ElementleHandler}
                        >
                            <input
                                disabled={disableInput}
                                type="text"
                                name="element"
                                className={styles.elementinput}
                                placeholder="Podaj pierwiastek"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                required
                            />
                        </form>
                    </div>
                </div>
                <div className={styles.resultsBlock}>
                    <div className={styles.categoriesWrapper}>
                        <div className={styles.categories}>Nazwa</div>
                        <div className={styles.categories}>Rodzaj</div>
                        <div className={styles.categories}>Masa</div>
                        <div className={styles.categories}>Rok</div>
                        <div className={styles.categories}>Elektroujemność</div>
                        <div className={styles.categories}>Okres</div>
                        {/*<div className={styles.categories}>Wartościowość</div>*/}
                    </div>
                    <div className={styles.resultsBlock}>
                        {guesses.map((guess, index) => (
                            <div className={styles.resultsWrapper} key={index}>
                                <div className={guess.nazwa === correctElement.nazwa ? styles.resultCorrect : styles.resultIncorrect}>
                                    {guess.nazwa}
                                </div>
                                <div className={guess.rodzaj === correctElement.rodzaj ? styles.resultCorrect : styles.resultIncorrect}>
                                    {guess.rodzaj}
                                </div>
                                <div className={guess.masaAtomowa === correctElement.masaAtomowa ? styles.resultCorrect : styles.resultIncorrect}>
                                    {guess.masaAtomowa}
                                </div>
                                <div className={guess.rokOdkrycia === correctElement.rokOdkrycia ? styles.resultCorrect : styles.resultIncorrect}>
                                    {guess.rokOdkrycia}
                                </div>
                                <div className={guess.elektroujemnosc === correctElement.elektroujemnosc ? styles.resultCorrect : styles.resultIncorrect}>
                                    {guess.elektroujemnosc}
                                </div>
                                <div className={guess.okres === correctElement.okres ? styles.resultCorrect : styles.resultIncorrect}>
                                    {guess.okres}
                                </div>
                                {/*<div className={guess.wartosciowosc === correctElement.wartosciowosc ? styles.resultCorrect : styles.resultIncorrect}>
                                    {/*guess.wartosciowosc.map((value, index) => (
                                        <span key={index}>{value}{index !== guess.wartosciowosc.length - 1 && ', '}</span>
                                    ))}
                                    <div>{guess.wartosciowosc}</div>
                                </div>*/}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Elementle;
