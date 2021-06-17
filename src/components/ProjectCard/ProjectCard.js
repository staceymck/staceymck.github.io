import React from 'react';
import styles from './ProjectCard.module.scss';

const ProjectCard = ({img, alt, name, tech}) => {

  return (
    <div className={styles.ProjectCard}>
      <div className={styles.Img}>
        {img}
      </div>
      <div className={styles.Text}>
        <h1>{name}</h1>
        <h2>{tech}</h2>
      </div>
    </div>
  )
}

export default ProjectCard;