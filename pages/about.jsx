import styles from '../styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.heading}>A Little Bit About Me</h3>
        <p>
        Hey there! I'm Scott. By day, I'm a full-stack developer always looking for the next cool tech thing to learn.  I understand that tech is always changing, and I'm always trying to learn to keep myself up to date.

        When I'm not diving into code, you might find me playing video games, cheering on my favorite sports teams, or simply enjoying quality time with my amazing wife and our two awesome kids.
        </p>
      </div>
      <div>
        <h3 className={styles.heading}>Skills</h3>
        <ul>
          <li>Database Management (SQL, MongoDB)</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>PHP</li>
          <li>C#</li>
          <li>Python (Django, Flask)</li>
          <li>RESTful APIs</li>
          <li>GraphQL</li>
          <li>Docker</li>
          <li>AWS</li>
          <li>Version Control (Git, GitHub, GitLab)</li>
          <li>Automated Testing</li>
          <li>HTML, CSS, JavaScript</li>
        </ul>
      </div>
      <div>
        <h3 className={styles.heading}>Resume</h3>
        <a href="/scottresume.pdf" download className={styles.resumeButton}>Download My Resume</a>
      </div>
    </div>
  );
};

export default AboutPage;
