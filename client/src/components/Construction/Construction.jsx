import styles from "./Construction.module.css"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
const Construction = () => {
  return (
    <>
    <Header/>
    <div className={styles.main}>
        <div className={styles.textWrapper}>
          <h1>Strona w trakcie budowy</h1>
          <h3>Przepraszamy za niedogodności, pracujemy nad ukończeniem naszej strony.</h3>
        </div>
        <a href="/">Powrót na stronę główną</a>
    </div>
    <Footer/>
    </>
  )
}

export default Construction