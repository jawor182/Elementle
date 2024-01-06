"use client"
import "./globals.css"
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import backgroundImage from "/public/bg.png"
import styles from "../components/styles/Page.module.css"
export default function Home() {
    const ruter = useRouter();
    const handleLink = (url) => {
        ruter.push(url);
    };
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
                    backgroundColor: "#457B9D"
                }}
            >
                <div className={styles.wrapper}>
                    <div className={styles.minigra}>
                        <div onClick={() => handleLink("/gra1")} className={styles.block}>
                        <img src="" alt="Tu bedzie obrazek" className={styles.gameLogo}></img>Elementle
                        </div>
                    </div>
                    <div className={styles.minigra}>
                        <div onClick={() => handleLink("/gra2")} className={styles.block}>
                            <img src="" alt="Tu bedzie obrazek" className={styles.gameLogo}></img>Znajdowanie
                        </div>
                    </div>
                    <div className={styles.minigra}>
                        <div onClick={() => handleLink("/gra3")} className={styles.block}>
                        <img src="" alt="Tu bedzie obrazek" className={styles.gameLogo}></img>Uzupełnianie
                        </div>
                    </div>
                    <div className={styles.minigra}>
                        <div onClick={() => handleLink("/gra4")} className={styles.block}>
                        <img src="" alt="Tu bedzie obrazek" className={styles.gameLogo}></img>Właściwości
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
}
