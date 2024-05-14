import React, { useState, useEffect, useRef } from 'react';
import styles from './Wlasciwosci.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import WinScreen from '../../components/WinScreen/WinScreen';

const elements = [
  {
    name: 'wodór',
    details: {
      Rodzaj: 'niemetal',
      'Masa atomowa': '1.0078',
      'Rok odkrycia': '1766',
      Okres: '1',
      Elektroujemność: '2.2',
      Wartościowość: '1',
    },
  },
  {
    name: 'hel',
    details: {
      Rodzaj: 'gaz szlachetny',
      'Masa atomowa': '4.0026',
      'Rok odkrycia': '1868',
      Okres: '1',
      Elektroujemność: 'brak',
      Wartościowość: '0',
    },
  },
  {
    name: 'lit',
    details: {
      Rodzaj: 'metal',
      'Masa atomowa': '6.941',
      'Rok odkrycia': '1817',
      Okres: '2',
      Elektroujemność: '1.0',
      Wartościowość: '1',
    },
  },
  {
    name: 'beryl',
    details: {
      Rodzaj: 'metal',
      'Masa atomowa': '9.0122',
      'Rok odkrycia': '1797',
      Okres: '2',
      Elektroujemność: '1.5',
      Wartościowość: '2',
    },
  },
  {
    name: 'bor',
    details: {
      Rodzaj: 'półmetal',
      'Masa atomowa': '10.811',
      'Rok odkrycia': '1808',
      Okres: '2',
      Elektroujemność: '2.0',
      Wartościowość: '2',
    },
  },
];

const Wlasciwosci = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [elementNames, setElementNames] = useState(Array(elements.length).fill(''));
  const [gameOver, setGameOver] = useState(false);
  const inputRefs = useRef(elements.map(() => React.createRef()));

  useEffect(() => {
    if (inputRefs.current[currentCard]) {
      inputRefs.current[currentCard].current.focus();
    }
  }, [currentCard]);

  const checkElementName = (e, index) => {
    e.preventDefault();
    if (elementNames[index].toLowerCase() === elements[index].name.toLowerCase()) {
      if (index === elements.length - 1) {
        setGameOver(true);
      } else {
        setCurrentCard(currentCard + 1);
      }
    }
  };

  return (
    <>
    <Header/>
    <div className={styles.gameContainer}>
      {/* Overlay that appears with a transition when the game is over */}
      {gameOver && <div className={styles.overlay} style={{ opacity: gameOver ? 1 : 0 }}></div>}

      {elements.map((element, index) => (
        <div key={index} className={`${styles.card} ${index <= currentCard ? styles.flipped : ''}`}>
          <div className={styles.cardFront}>
            {/* Render input field if this is the current card or it's a previously guessed card */}
            {(index === currentCard || index < currentCard) && (
              <form onSubmit={(e) => checkElementName(e, index)}>
                <input
                  type="text"
                  value={elementNames[index]}
                  onChange={(e) => {
                    const newNames = [...elementNames];
                    newNames[index] = e.target.value;
                    setElementNames(newNames);
                  }}
                  placeholder="Wpisz pełną nazwę pierwiastka"
                  className={styles.inputField}
                  ref={inputRefs.current[index]}
                  readOnly={index < currentCard}
                />
              </form>
            )}

            {/* Details to show always if this card was ever flipped */}
            {index <= currentCard && (
              <div className={styles.elementDetails}>
                {Object.entries(element.details).map(([key, value]) => (
                  <div key={key} className={styles.detail}>
                    <strong>{key}:</strong> {value}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className={styles.cardBack}>
            {index > currentCard && (
              <div className={styles.questionMarkStyle}>
                ?
              </div>
            )}
          </div>
        </div>
      ))}
      {gameOver && <WinScreen/>}
    </div>
    <Footer/>
    </>
  );
};

export default Wlasciwosci;