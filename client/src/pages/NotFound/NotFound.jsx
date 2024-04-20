import styles from './NotFound.module.css';
const NotFound = () => {
    return (
        <div className={styles.body}>
            {'Nie znaleziono :('}
            <a href="/">Powrot do domu</a>
        </div>
    );
};

export default NotFound;
