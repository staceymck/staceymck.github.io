import React from 'react';
import styles from './ProjectCard.module.scss';

const ProjectCard = ({svgImg, title, tech, onClick}) => {

  return (
    <div className={styles.ProjectCard} onClick={onClick}>
        <div className={styles.Img}>
          {svgImg}
        </div>
        <div className={styles.Text}>
          <h1>{title}</h1>
          <h2>{tech}</h2>
        </div>
    </div>
  )
}

export default ProjectCard;