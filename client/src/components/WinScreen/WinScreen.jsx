import styles from "./WinScreen.module.css"
const WinScreen = () => {
  const games = {
    game1:{
      name:"Elementle",
      link:"http://localhost:5173/elementle",
      icon: "images/1-menu-item.png"
    },
    game2:{
      name:"Znajdowanie",
      link:"http://localhost:5173/znajdowanie",
      icon: "images/2-menu-item.png"
    },
    game3:{
      name:"Uzupełnianie",
      link:"http://localhost:5173/uzupelnianie",
      icon: "images/3-menu-item.png"
    },
    game4:{
      name:"Właściwości",
      link:"http://localhost:5173/wlasciwosci",
      icon: "images/4-menu-item.png"
    }
  }
  const gamesArray = Object.values(games);
  return (
    <div className={styles.box}>
        <h1 className={styles.mainText}>Gratulacje!</h1>
        <h2 className={styles.secText}>Sprawdź się w innych grach</h2>
        <div className={styles.choicesWrapper}>
          {gamesArray.map((game, index)=>(
            <a key={index} className={styles.choice} href={game.link}>
                <img className={styles.image} src={`${game.icon}`} alt="Ikona minigierki"/>
                {game.name}
            </a>
          ))}
        </div>
    </div>
  )
}

export default WinScreen