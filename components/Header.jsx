import styles from "./styles/Header.module.css"
import Image from "next/image"
export default function Header(){
    
    return(
        
        <div className={styles.header}>
            <div className={styles.logo}>
                <div className={styles.img}> 
                    <Image 
                    src={"/logo.png"}
                    width={4*16}
                    height={4*16}
                    alt="logo"
                    layout="intrinsic"
                    />
                </div>
                <div className={styles.title}>Elementle</div>
            </div>
            <div className={styles.secText}>Chemiczne gry tego typu</div>
        </div>
    )
}