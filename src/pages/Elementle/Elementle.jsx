import { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import styles from './Elementle.module.css';
import elements from '../../data/elements.js';
  //TODO 1. Trza zrobic porownywanie wlasciwosci. 2. Trzymanie w jakis sposob danych w pamieci przegladarki. 3. Zablokowanie inputu w przypadku zwyciestwa i moze jakis fajny komunikat
const Elementle = () => {
    const [inputValue, setInputValue] = useState('');
    const ElementleHandler = async (event) => {
        event.preventDefault();
        try {
            const regex = new RegExp('^[\\p{L}]+$', 'u');
            const match = inputValue.match(regex);
            if (match) {
                const userGuess = match[0];
                console.log('userGuess: ' + userGuess);
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
                const correctElement = responseData.correctElement;
                if (elements.some(element => element.nazwa.toLowerCase() === userGuess.toLowerCase())) {
                    console.log("Exists!")
                }
                
                setInputValue('');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <>
            <Header />
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
                        {/*
                <div className={styles.categories}>Nazwa</div>
                <div className={styles.categories}>Rodzaj</div>
                <div className={styles.categories}>Masa</div>
                <div className={styles.categories}>Rok</div>
                <div className={styles.categories}>Elektroujemność</div>
                <div className={styles.categories}>Okres</div>
                <div className={styles.categories}>Wartościowość</div>
            */}
                    </div>
                    <div className={styles.resultsBlock}></div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Elementle;
