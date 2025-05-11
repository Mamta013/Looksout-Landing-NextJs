import styles from '../styles/BlogSection.module.css';

const blogs = [
  {
    title: 'Organize your digital assets with a new methodology here.',
    description: 'Podcasting operational management inside of workflows to establish a framework seamless. Convergence collaboratively.',
    author: 'Andrew Miller',
    role: 'CEO',
    date: '25 Apr',
    image: '/logos/blog1.jpg',
    avatar: '/avatars/andrew.jpg',
  },
  {
    title: 'Organize your digital assets with a new methodology here.',
    description: 'Keeping your eye while performing a deep dive on the start-up mentality to derive convergence collaboratively.',
    author: 'David Munsan',
    role: 'UX',
    date: '25 Apr',
    image: '/logos/blog2.jpg',
    avatar: '/avatars/david.jpg',
  },
  {
    title: 'Organize your digital assets with a new methodology here.',
    description: 'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C .',
    author: 'Andrew Meller',
    role: 'UI',
    date: '25 Apr',
    image: '/logos/blog3.jpg',
    avatar: '/avatars/andrew2.jpg',
  },
];

const BlogSection = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Latest Blog Posts</h2>
      <p className={styles.subtitle}>
        Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.
      </p>
      <div className={styles.grid}>
        {blogs.map((post, index) => (
          <div key={index} className={styles.card}>
            <img src={post.image} alt={post.title} className={styles.image} />
            <div className={styles.content}>
              <h3 className={styles.cardTitle}>{post.title}</h3>
              <p className={styles.description}>{post.description}</p>
              <div className={styles.authorRow}>
                <img src={post.avatar} alt={post.author} className={styles.avatar} />
                <div>
                  <div className={styles.authorName}>{post.author}</div>
                  <div className={styles.authorRole}>{post.role}</div>
                </div>
                <span className={styles.date}>{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
