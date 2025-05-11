import styles from '../styles/Testimonials.module.css';

const Testimonials = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.logo}> {/* Logo above testimonial */}
          <img src="/logos/lookscout-logo.svg" alt="LookScout" />
        </div>
        <blockquote className={styles.testimonialQuote}>
          <p>
            Thank you for making it painless, pleasant and most of all hassle free! I love LookScout. I can't say enough about LookScout. Great job, I will definitely be ordering again!
          </p>
        </blockquote>
        <div className={styles.profile}>
          <img
            src="/logos/lisa-avatar.png"
            alt="Lisa Smith"
            className={styles.avatar}
          />
          <div>
            <div className={styles.name}>Lisa Smith</div>
            <div className={styles.title}>CEO Company</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
