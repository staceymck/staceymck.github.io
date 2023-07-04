import React from 'react';
import styles from './ProjectCard.module.scss';

const ProjectCard = ({svgImg, thumbnail, alt, title, tech, onClick}) => {

  return (
    <div className={styles.ProjectCard} onClick={onClick}> 
      {
        svgImg &&  
        <div className={styles.Img}>
          {svgImg}
        </div>
      }
      {
        thumbnail && alt &&
        <img className={styles.Img} src={thumbnail} alt={alt}/>
      }
      <div className={styles.Text}>
        <h1>{title}</h1>
        <h2>{tech}</h2>
      </div>
    </div>
  )
}

export default ProjectCard;