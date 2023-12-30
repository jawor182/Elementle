import "./globals.css"
import Image from "next/image";
import Header from "@/components/Header";
import styles from "../components/styles/Page.module.css"
export default function Home() {
    return (
        <div className="app">
            <Header />
            
            <div className="Center"
                style={{
                    position: "relative",
                    width: "100vw",
                    height: "100vh",
                    backgroundColor:"#457B9D"
                }}>
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
                <Image
                    src="/bg.png"
                    alt="Mountains with snow"
                    layout="fill"
                    objectFit="cover"
                />

                
            </div>           
        </div>
    );
}
