import React from 'react';
import LinkButton from '../Button/LinkButton';
import styles from './PostCard.module.scss';

const PostCard = ({title, link, teaser}) => {
  return (
    <div className={styles.PostCard}>
      <a href={link}>
        <h1>{title}</h1>
      </a>
      <p>{teaser}</p>
      <LinkButton type="Primary" text="Read" link={link}/>
    </div>
  )
}

export default PostCard;