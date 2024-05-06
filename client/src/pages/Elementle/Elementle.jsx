import { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import styles from './Elementle.module.css';
import elements from '../../data/elements.js';
import WinScreen from '../../components/WinScreen/WinScreen.jsx';
import useLocalStorage from 'use-local-storage';

const Elementle = () => {
    const currentDate = new Date().getUTCDate();
    const [inputValue, setInputValue] = useState('');
    const [guesses, setGuesses] = useState([]);
    const [disableInput, setDisableInput] = useState(false);
    const [correctElement, setCorrectElement] = useState(0);
    const [win, setWin] = useState(false);

    // Definiowanie zmiennych do lokalnej pamięci
    const [localGuesses, setLocalGuesses] = useLocalStorage('guesses', []);
    const [localDisableInput, setLocalDisableInput] = useLocalStorage('disableInput');
    const [localCorrectElement, setLocalCorrectElement] = useLocalStorage('correctElement', 0);
    const [localWin, setLocalWin] = useLocalStorage('win', false);
    const [localCurrentDate, setLocalCurrentDate] = useLocalStorage('currentDate', currentDate);

    useEffect(() => {
        // Check if local storage values exist
        if (localCurrentDate !== null) {
            // Assign local values to state variables
            setGuesses(localGuesses);
            setDisableInput(localDisableInput);
            setCorrectElement(localCorrectElement);
            setWin(localWin);
        } else {
            // Initialize local storage with default values
            setLocalGuesses([]);
            setLocalDisableInput(false);
            setLocalCorrectElement(0);
            setLocalWin(false);
            setLocalCurrentDate(currentDate);
        }
    }, [localCurrentDate, localGuesses, localDisableInput, localCorrectElement, localWin]);
    

    useEffect(() => {
        // Check if the local storage values are different from defaults
        if (localCurrentDate !== currentDate || localStorage == null) {
            // Update local storage with defaults
            setLocalGuesses([]);
            setLocalDisableInput(false);
            setLocalCorrectElement(0);
            setLocalWin(false);
            setLocalCurrentDate(currentDate);
        } else {
            // Assign local values to state variables
            setGuesses(localGuesses);
            setDisableInput(localDisableInput);
            setCorrectElement(localCorrectElement);
            setWin(localWin);
        }
    },[localCurrentDate, currentDate, setLocalGuesses, setLocalDisableInput, setLocalCorrectElement, setLocalWin, setLocalCurrentDate, localGuesses, localDisableInput, localCorrectElement, localWin] );

    useEffect(() => {
        if (guesses.length > 0) {
            // just be
            //  console.log(guesses)
            console.log("Guesses type:", typeof guesses);
            console.log("Guesses value:", guesses);

        }
    }, [guesses]);

   useEffect(()=>{
    if(win){
        setDisableInput(true);
        setLocalCorrectElement(correctElement);
        setLocalCurrentDate(currentDate);
        setLocalDisableInput(disableInput);
        setLocalGuesses(guesses);
        setLocalWin(win);
       // console.log(localStorage)
    }
   },[win, setLocalCorrectElement, correctElement, setLocalCurrentDate, currentDate, setLocalDisableInput, disableInput, setLocalGuesses, guesses, setLocalWin])

    useEffect(() => {
        if (correctElement !== null) {
            setInputValue('');
        }
    }, [correctElement]);
    //console.log("Guesses type:", typeof guesses);
    //console.log("Guesses value:", guesses);
    
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
                        element.nazwa.toLowerCase() === userGuess.toLowerCase()
                );
                if (userGuessElement) {
                    if (userGuessElement.nazwa === correctElement.nazwa) {
                        setWin(true);
                    }
                    setGuesses([...guesses, userGuessElement]);
                }
            }
            setInputValue('');
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
                    </div>
                    <div className={styles.resultsBlock}>
                        
                    {guesses.map((guess, index) => (
                            <div className={styles.resultsWrapper} key={index}>
                                <div
                                    className={
                                        guess.nazwa === correctElement.nazwa
                                            ? styles.resultCorrect
                                            : styles.resultIncorrect
                                    }
                                >
                                    {guess.nazwa}
                                </div>
                                <div
                                    className={
                                        guess.rodzaj === correctElement.rodzaj
                                            ? styles.resultCorrect
                                            : styles.resultIncorrect
                                    }
                                >
                                    {guess.rodzaj}
                                </div>
                                <div
                                    className={
                                        guess.masaAtomowa ===
                                            correctElement.masaAtomowa
                                            ? styles.resultCorrect
                                            : styles.resultIncorrect
                                    }
                                >
                                    {guess.masaAtomowa}
                                </div>
                                <div
                                    className={
                                        guess.rokOdkrycia ===
                                            correctElement.rokOdkrycia
                                            ? styles.resultCorrect
                                            : styles.resultIncorrect
                                    }
                                >
                                    {guess.rokOdkrycia}
                                </div>
                                <div
                                    className={
                                        guess.elektroujemnosc ===
                                            correctElement.elektroujemnosc
                                            ? styles.resultCorrect
                                            : styles.resultIncorrect
                                    }
                                >
                                    {guess.elektroujemnosc}
                                </div>
                                <div
                                    className={
                                        guess.okres === correctElement.okres
                                            ? styles.resultCorrect
                                            : styles.resultIncorrect
                                    }
                                >
                                    {guess.okres}
                                </div>
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
