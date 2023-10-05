import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'ScottWattenbarger.com',
    href: 'https://www.scottwattenbarger.com',
  },
  {
    social: 'email',
    link: 'scottwattenbarger@gmail.com',
    href: 'mailto:scottwattenbarger@gmail.com',
  },
  {
    social: 'github',
    link: 'scottwatt',
    href: 'https://github.com/scottwatt',
  },
  {
    social: 'linkedin',
    link: 'scottwattenbarger',
    href: 'https://www.linkedin.com/in/https://www.linkedin.com/in/scott-wattenbarger-057652123//',
  },

  {
    social: 'instagram',
    link: 'ScottWattenbarger',
    href: 'https://www.instagram.com/Wattenbargerscott',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
