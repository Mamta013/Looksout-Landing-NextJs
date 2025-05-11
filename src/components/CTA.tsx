import styles from '../styles/CTA.module.css';

const CTA = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.industry}>1% OF THE INDUSTRY</div>
        <h2 className={styles.title}>
          Welcome to your new digital reality that will rock<br />
          your world truly at all throughout.
        </h2>
        <form className={styles.form}>
          <input
            className={styles.input}
            type="email"
            placeholder="Enter your email"
            required
          />
          <button className={styles.button} type="submit">
            Submit
          </button>
        </form>
        <div className={styles.features}>
          <span className={styles.feature}>
            <span className={styles.check}>✔</span> Fully Secure
          </span>
          <span className={styles.feature}>
            <span className={styles.check}>✔</span> 24/7 Support
          </span>
          <span className={styles.feature}>
            <span className={styles.check}>✔</span> Done Deal
          </span>
        </div>
      </div>
    </section>
  );
};

export default CTA;
