import styles from '../styles/TrustedBy.module.css';

const logos = [
  { src: '/logos/the-verge.png', alt: 'The Verge' },
  { src: '/logos/slack1.png', alt: 'Slack' },
  { src: '/logos/google.png', alt: 'Google' },
  { src: '/logos/paypal.png', alt: 'PayPal' },
  { src: '/logos/pinterest.png', alt: 'Pinterest' },
  { src: '/logos/mailchimp.png', alt: 'Mailchimp' },
];

const TrustedBy = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Proud to Be Used By</h2>
      <p className={styles.subtitle}>
        Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.
      </p>
      <div className={styles.logoRow}>
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className={styles.logo}
          />
        ))}
      </div>
    </section>
  );
};

export default TrustedBy;
