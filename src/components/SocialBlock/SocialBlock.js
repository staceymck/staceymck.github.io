import React from 'react';
import styles from './SocialBlock.module.scss';

const SocialBlock = () => {

  return (
    <div className={styles.SocialBlock} >
      <span>Connect:</span>
      <a href="https://www.linkedin.com/in/staceymcknight314/" aria-label="Visit LinkedIn profile">
        <i className="fa fa-linkedin" aria-hidden="true"></i>
      </a>
      <a href="https://github.com/staceymck" aria-label="Visit GitHub profile">
        <i className="fa fa-github" aria-hidden="true"></i>
      </a>
    </div>
  )
}

// SocialBlock.defaultProps = {
//   color: "Primary",
//   align: "Center"

// }

export default SocialBlock;