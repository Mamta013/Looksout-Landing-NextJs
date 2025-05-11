import styles from '../styles/ProductFeatures.module.css';
import clsx from 'clsx';

type Props = {
  variant?: 'light' | 'dark';
};

const features = [
  {
    title: 'Explore ideas together',
    description:
      'Engage audience segments and finally create actionable insights. Amplify vertical integration.',
    icon: (
      <span className={styles.iconCircle}>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="14" fill="#407BFF"/>
          <path d="M19.5 8.5L8.5 13L13 14.5L14.5 19.5L19.5 8.5Z" fill="#fff"/>
        </svg>
      </span>
    ),
  },
  {
    title: 'Bring those ideas to life',
    description:
      'Engage audience segments and finally create actionable insights. Amplify vertical integration.',
    icon: (
      <span className={styles.iconCircle}>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="14" fill="#407BFF"/>
          <path d="M14 8.5a3.5 3.5 0 0 1 3.5 3.5c0 2.188-1.75 3.5-1.75 5.25h-3.5C12.25 15.5 10.5 14.188 10.5 12A3.5 3.5 0 0 1 14 8.5zm0 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fill="#fff"/>
        </svg>
      </span>
    ),
  },
  {
    title: 'Ship better outcomes',
    description:
      'Engage audience segments and finally create actionable insights. Amplify vertical integration.',
    icon: (
      <span className={styles.iconCircle}>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="14" fill="#407BFF"/>
          <path d="M21 14a7 7 0 1 1-14 0 7 7 0 0 1 14 0zm-7-3v6m0 0l3-3m-3 3l-3-3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    ),
  },
];

const ProductFeatures = ({ variant = 'light' }: Props) => {
  const isDark = variant === 'dark';
  return (
    <section className={clsx(styles.section, styles[variant])}>
      <div className={styles.inner}>
        {/* Visual left for dark, right for light */}
        {isDark && (
          <div className={styles.visual}>
            <div className={styles.halfCirclesGrid}>
              <div
                className={clsx(styles.halfCircle, styles.leftHalf)}
                style={{ backgroundImage: `url('/workspace.jpg')` }}
              />
              <div
                className={clsx(styles.halfCircle, styles.rightHalf)}
                style={{ backgroundImage: `url('/workspace.jpg')` }}
              />
            </div>
          </div>
        )}
        <div className={styles.content}>
          {!isDark && (
            <>
              <h2 className={styles.heading}>Redefining Product Features</h2>
              <p className={styles.subheading}>
                Keeping your eye on the ball while performing a deep dive on the start-up mentality to&nbsp;
                derive convergence on cross-platform integration.
              </p>
            </>
          )}
          <div className={styles.featureList}>
            {features.map((feature, i) => (
              <div key={i} className={styles.featureCard}>
                {feature.icon}
                <div>
                  <div className={styles.featureTitle}>{feature.title}</div>
                  <div className={styles.featureDesc}>{feature.description}</div>
                  <a className={styles.learnMore} href="#">Learn more <span>&rarr;</span></a>
                </div>
              </div>
            ))}
          </div>
        </div>
        {!isDark && (
          <div className={styles.visual}>
            <div className={styles.circlesGrid}>
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={clsx(styles.circle, styles['circle' + i])}
                  style={{ backgroundImage: `url('/workspace.jpg')` }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductFeatures;
