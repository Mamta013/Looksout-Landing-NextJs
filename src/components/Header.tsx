import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <span className={styles.logoText}>
            <img src="/logos/brand-icon.png" alt="Lookscout" style={{ height: 32, verticalAlign: 'middle', marginRight: 8 }} />
            <span style={{ color: '#fff', fontWeight: 700, fontSize: 22, verticalAlign: 'middle' }}></span>
          </span>
        </div>
        <nav className={styles.navContainer}>
          <div className={styles.navLinks}>
            <a className={styles.navButton} href="#">Home</a>
            <a className={styles.navButton} href="#">Our Products</a>
            <a className={styles.navButton} href="#">Resources</a>
            <a className={styles.navButton} href="#">Contacts</a>
          </div>
        </nav>
        <div className={styles.actionContainer}>
          <button className={styles.navButton}>Log in</button>
          <button className={styles.primaryAction}>Sign up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

