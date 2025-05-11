import styles from '../styles/FeaturesOverview.module.css';

const features = [
  {
    icon: '🔗',
    title: 'Easier Work Organization',
    description: 'Efficiently unleash cross-media information without cross-media value. Quickly timely deliverables for real-time schemas.',
  },
  {
    icon: '➕',
    title: 'Fast Connection',
    description: 'Completely pursue scalable customer cross- media through potentialities. Holistically quickly installed portals.',
  },
  {
    icon: '🔗',
    title: 'Streamlined Processes',
    description: 'Objectively innovate empowered scalable manufactured products whereas parallel platforms predominate extensible.',
  },
  {
    icon: '👤',
    title: 'Easier Integrations',
    description: 'Completely pursue scalable customer try through potentialities. Pontificate portals installed. Efficiently unleash information.',
  },
  {
    icon: '🧑‍💼',
    title: 'Marketing Analytics',
    description: 'Phosfluorescently engage worldwide methodologies with web-enabled interactively coordinate.',
  },
  {
    icon: '🖊️',
    title: 'Workflow Builder',
    description: 'Collaboratively administrate turnkey service channels whereas virtual e-tailers. This is objectively scalable metrics whereas.',
  },
];

const FeaturesOverview = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h1>Messaging for all</h1>
        <p>
          User generated content in real-time will have multiple touchpoints for offshoring.
        </p>
      </div>

      <div className={styles.grid}>
        {features.map((feature, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <a href="#">Learn more →</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesOverview;
