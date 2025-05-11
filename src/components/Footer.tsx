import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <img src="/logos/brand-icon.png" alt="Lookscout Logo" />
          <p>
            Generate outside the box<br />
            thinking with the possibility to<br />
            target the low.
          </p>
        </div>

        <div className={styles.columns}>
          <div>
            <h4>Resources</h4>
            <ul>
              <li>Community</li>
              <li>Events</li>
              <li>Help Center</li>
              <li>Partners</li>
            </ul>
          </div>
          <div>
            <h4>Products</h4>
            <ul>
              <li>Integrations</li>
              <li>Solutions</li>
              <li>Features</li>
              <li>Enterprise</li>
            </ul>
          </div>
          <div className={styles.subscribe}>
            <h4>Get Email Notifications</h4>
            <p>
              Generate outside the box thinking with<br />
              the possibility to target the low
            </p>
            <form className={styles.form}>
              <input
                type="email"
                placeholder="Enter email...."
                className={styles.input}
              />
              <button type="submit" className={styles.button}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2023 Lookscout. All Rights Reserved.</p>
        <div className={styles.socials}>
          <img src="/logos/facebook.png" alt="Facebook" />
          <img src="/logos/google1.png" alt="Google" />
          <img src="/logos/apple.png" alt="Apple" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
