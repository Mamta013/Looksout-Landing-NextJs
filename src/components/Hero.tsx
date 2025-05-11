import styles from '../styles/Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroBase}>
          <div className={styles.heroTitleBlock}>
            <h1 className={styles.heroTitle}>Your Supercharged<br />Design Workflow.</h1>
            <p className={styles.heroSubtitle}>
              We’ve been told it is not possible to overachieve our customers’ expectations. We have not reinvented the wheel, we decided to build upon it.
            </p>
          </div>
          <div className={styles.heroCTA}>
            <button className={styles.heroButton}>Send Notification</button>
          </div>
          <div className={styles.heroSupportContainer}>
            <span className={styles.heroSupportLabel}>Who supports us</span>
            <div className={styles.heroSupportLogos}>
              <img src="/logos/gitlab.svg" alt="GitLab" />
              <img src="/logos/slack.png" alt="Slack" />
              <img src="/logos/netflix.svg" alt="Netflix" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" height="40" />
            </div>
          </div>
        </div>
        <div className={styles.heroVisuals}>
          <div className={styles.geoshapeRowTop}>
            <svg width="180" height="56" viewBox="0 0 180 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="56" height="56" rx="28" stroke="white" strokeWidth="2"/>
              <rect x="62" y="0" width="56" height="56" rx="28" stroke="white" strokeWidth="2"/>
              <rect x="124" y="0" width="56" height="56" rx="28" stroke="white" strokeWidth="2"/>
              <path d="M28 0V56" stroke="white" strokeWidth="2"/>
              <path d="M90 0V56" stroke="white" strokeWidth="2"/>
              <path d="M152 0V56" stroke="white" strokeWidth="2"/>
            </svg>
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="28" cy="28" r="28" fill="white"/>
              <path d="M0 28L56 28" stroke="#2B63D9" strokeWidth="2"/>
            </svg>
          </div>
          <div className={styles.heroImageContainer}>
            <img src="/images/hero-person.jpg" alt="Profile" className={styles.heroImage} />
          </div>
          <div className={styles.geoshapeRowMid}>
            <svg width="112" height="112" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="56" cy="56" r="56" fill="none" stroke="white" strokeWidth="2"/>
            </svg>
            <svg width="112" height="112" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M112 56C112 87 87 112 56 112V0C87 0 112 25 112 56Z" fill="#B1CCFB"/>
            </svg>
          </div>
          <div className={styles.geoshapeRowBottom}>
            <svg width="112" height="56" viewBox="0 0 112 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="112" height="56" rx="28" fill="white"/>
              <circle cx="84" cy="28" r="14" fill="#2B63D9"/>
            </svg>
            <svg width="56" height="112" viewBox="0 0 56 112" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="56" height="112" rx="28" stroke="white" strokeWidth="2"/>
              <rect x="0" y="0" width="56" height="56" rx="28" fill="#fff"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
