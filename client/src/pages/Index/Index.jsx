import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from './index.module.css';

const Index = () => {
    return (
        <>
            <Header />
            <div className={styles.body}>
                <div className={styles.main}>
                    <div className={styles.wrapper}>
                        <img
                            src="images/logo.png"
                            alt="img"
                            className={styles.img}
                        ></img>
                        <div className={styles.mainText}>Elementle</div>
                    </div>
                    <a href="/elementle" className={styles.box} id="box1">
                        <img
                            className={styles.image}
                            src={'images/1-menu-item.png'}
                            alt="Tu bedzie obrazek"
                        />
                        <div className={styles.text}>Elementle</div>
                    </a>
                    <a href="/znajdowanie" className={styles.box} id="box2">
                        <img
                            className={styles.image}
                            src="images/2-menu-item.png"
                            alt="Tu bedzie obrazek"
                        />
                        <div className={styles.text}>Znajdowanie</div>
                    </a>
                    <a href="/uzupelnianie" className={styles.box} id="box3">
                        <img
                            className={styles.image}
                            src="images/3-menu-item.png"
                            alt="Tu bedzie obrazek"
                        />
                        <div className={styles.text}>Uzupełnianie</div>
                    </a>
                    <a href="/wlasciwosci" className={styles.box} id="box4">
                        <img
                            className={styles.image}
                            src="images/4-menu-item.png"
                            alt="Tu bedzie obrazek"
                        />
                        <div className={styles.text}>Właściwości</div>
                    </a>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Index;
