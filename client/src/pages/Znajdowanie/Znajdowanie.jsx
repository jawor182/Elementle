import { useEffect, useState } from "react"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import zdania from "../../data/zdania"
import styles from "./Znajdowanie.module.css"
import WinScreen from "../../components/WinScreen/WinScreen"
const Znajdowanie = () => {
    //const [inputValue,set]
    const [inputValue, setInputValue] = useState('');
    const [answerPhrase, setAnswerPhrase] = useState(null);
    const [foundElementsArray,setFoundElementsArray] = useState([]);
    const [win, setWin] = useState(false);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * 20);
        setAnswerPhrase(zdania[randomIndex]);
    },[]);

   
    
    useEffect(()=>{
        if(answerPhrase){
            if(foundElementsArray.length === answerPhrase.odpowiedz.length){
                setWin(true)
            }
        }
    },[setWin,answerPhrase,foundElementsArray]);


    const znajdowanieHandler = (event) => {
        event.preventDefault();
        try{
            const regex = new RegExp('^[\\p{L}]+$', 'u');
            const match = inputValue.match(regex);
            if(match){                
                const guess = match[0];
                let foundElementsCopy = [...foundElementsArray]; // Create a copy of the array
                for(let i = 0; i < answerPhrase.odpowiedz.length; i++){
                    if(guess === answerPhrase.odpowiedz[i]){
                        if(!foundElementsCopy.includes(guess)){ // Check if guess is not already in foundElementsArray
                            foundElementsCopy.push(guess); // Add guess to the copy
                        }
                    }
                }
                setFoundElementsArray(foundElementsCopy); // Set the state with the new array
                setInputValue('');
            }
        } catch(e){
            console.error("Error:", e);
        }
    }
    

    return (
        <>  
            {win && <WinScreen/>}
            <Header />
            <div className={styles.elementle}>
                <div className={styles.wrapper}>
                    <img
                        src="images/logo.png"
                        alt="img"
                        className={styles.img}
                    />
                    <h2 className={styles.mainText}>Znajdowanie</h2>
                </div>
                <div className={styles.mainBlock}>
                    <div className={styles.gameWrapper}>
                        <div className={styles.gameText}>
                            {answerPhrase ? answerPhrase.zdanie : "Loading ..."}
                        </div>
                        <div className={styles.formWrapper}>
                            <form
                                id="form"
                                method="POST"
                                onSubmit={znajdowanieHandler}
                            >
                                <input
                                    required
                                    type="text"
                                    name="odpowiedz"
                                    className={styles.elementInput}
                                    placeholder="Podaj ukryty element w zdaniu"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                />
                            </form>
                        </div>
                    </div>
                    <div className={styles.resultsWrapper}>
                        <div className={styles.resultsText}>
                            Znalezione pierwiastki:
                        </div>
                        <div className={styles.resultsNumbers}>
                            { foundElementsArray.length + "/" + (answerPhrase ? answerPhrase.odpowiedz.length : "Loading..." ) }
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Znajdowanie