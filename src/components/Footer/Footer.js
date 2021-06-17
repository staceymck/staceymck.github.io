import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <h1>PS:</h1>
      <p>Have you tried another color scheme? Check out the buttons in the top menu</p>
      <div className={styles.IconBlock}>
         <a href="https://www.linkedin.com/in/staceymcknight314/" aria-label="Visit LinkedIn profile">
             <i className="fa fa-linkedin" aria-hidden="true"></i>
         </a>
         <a href="https://github.com/staceymck" aria-label="Visit GitHub profile">
             <i className="fa fa-github" aria-hidden="true"></i>
         </a>
      </div>
    </footer>
  )
}

export default Footer;