import React from 'react';
import styles from './ProjectCard.module.scss';

const ProjectCard = ({imgFile, alt, name, tech}) => {

  const img = require(`../../assets/${imgFile}`).default

  return (
    <div className={styles.ProjectCard}>
      <div className={styles.Img}>
        <img src={img} alt={alt} />
      </div>
      <div className={styles.Border}></div>
      <div className={styles.Text}>
        <h1>{name}</h1>
        <h2>{tech}</h2>
      </div>
    </div>
  )
}

export default ProjectCard;