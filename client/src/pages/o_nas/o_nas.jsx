import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import styles from "./O_nas.module.css"
const O_nas = () => {
  return (
    <>
        <Header/>
        <div className={styles.main}>
          <div className={styles.textWrapper}>
          <h1>Witajcie w świecie nauki i przygody! Jesteśmy zespołem pasjonatów chemii, którzy postanowili przenieść fascynujący świat molekuł, reakcji chemicznych i eksperymentów laboratoryjnych do świata gier komputerowych.</h1>
            <p>Nasza gra to nie tylko rozrywka, ale także edukacja. Zaprojektowana z myślą o uczniach, studentach i wszystkich, którzy chcą zgłębić tajniki chemii w sposób interaktywny i emocjonujący.</p>
            <p>Naszym celem jest nie tylko zapewnienie świetnej zabawy, ale także zachęcenie do zainteresowania się nauką. Dlatego też nasza gra zawiera autentyczne informacje o chemii, oparte na aktualnych badaniach i odkryciach naukowych. Chcemy, aby nasi gracze odkrywali fascynujący świat chemii i inspirowali się do dalszych eksploracji w rzeczywistym laboratorium.</p>
            <p>Dołącz do naszej przygody chemicznej i pozwól się porwać w wir nauki i zabawy!</p>
            <p>Mateusz Ilczuk, Jakub Jaworski, Hubert Śniegowski, Mateusz Nalepa</p>
          </div>
        </div>
        <Footer/>
    </>
  )
}

export default O_nas