import {useState, useEffect } from 'react';
import styles from './Uzupelnianie.module.css';
import reactions from '../../data/reactions';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import WinScreen from '../../components/WinScreen/WinScreen.jsx';

const Uzupelnianie = () => {
    const [reaction, setReaction] = useState({
        nazwa: '',
        reagenty: [],
        produkty: [],
        userInput: '',
        isCorrect: false,
        targetBlock: '',
        correctAnswer: ''
    });

    useEffect(() => {
        const randomReaction = reactions[Math.floor(Math.random() * reactions.length)];
        const randomBlockIndex = Math.floor(Math.random() * 2);
        const randomBlock = randomBlockIndex === 0 ? 'reagenty' : 'produkty';
        const correctAnswer = randomReaction[randomBlock].join(' + ');
        randomReaction[randomBlock] = ['?'];
        setReaction({ ...randomReaction, targetBlock: randomBlock, correctAnswer });
    }, []);

    const handleChange = (event) => {
        setReaction({ ...reaction, userInput: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (reaction.userInput === reaction.correctAnswer) {
            setReaction({ ...reaction, isCorrect: true });
        } else {
            setReaction({ ...reaction, isCorrect: false });
        }
    };

    return (
        <>
            <Header />
            {reaction.isCorrect && <WinScreen />}
            <div className={styles.gameContainer}>
                <div  className={styles.header}>Uzupełnianie Reakcji Chemicznej</div>
                <p className={styles.description}>Uzupełnij poniższą reakcję chemiczną:</p>
                <div className={styles.reaction}>
                    <div className={styles.reactionBlock}>
                        <span className={styles.reactionName}>Nazwa: </span>
                        <span>{reaction.nazwa}</span>
                    </div>
                    <div className={styles.reactionBlock}>
                        <span className={styles.reactionName}>Reagenty: </span>
                        <span>{reaction.reagenty.join(' + ')}</span>
                    </div>
                    <div className={styles.reactionBlock}>
                        <span className={styles.reactionName}>Produkty: </span>
                        <span>{reaction.produkty.join(' + ')}</span>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={reaction.userInput}
                        onChange={handleChange}
                        placeholder="Wpisz brakujący element"
                        className={styles.input}
                    />
                    <button type="submit" className={styles.button}>Sprawdź</button>
                </form>
                {reaction.isCorrect && <WinScreen />}
                {reaction.isCorrect === false && <p className={styles.incorrect}>Nieprawidłowa odpowiedź, spróbuj ponownie.</p>}
            </div>
            <Footer />
        </>
    );
};

export default Uzupelnianie;
