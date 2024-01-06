import "./globals.css"
import Header from "@/components/Header";
import backgroundImage from "/public/bg.png"
import styles from "../components/styles/Page.module.css"
export default function Home() {
    return (
        <div className="app">
            <Header />
            <div
                style={{
                    backgroundImage: `url(${backgroundImage.src})`, //.src odpowiada za sciezke do pliku
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    width: "100vw",
                    height: "100vh",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor:"#457B9D"
                }}
            >
                <div className={styles.wrapper}>
                    <div className={styles.minigra}>
                        <div className={styles.block}></div>
                    </div>
                    <div className={styles.minigra}>
                        <div className={styles.block}></div>
                    </div>
                    <div className={styles.minigra}>
                        <div className={styles.block}></div>
                    </div>
                    <div className={styles.minigra}>
                        <div className={styles.block}></div>
                    </div>

                </div>
             

            </div>
        </div>
    );
}
