import React from 'react';
import Button from '../Button/Button';
import styles from './PostCard.module.scss';

const PostCard = ({title, link, teaser}) => {
  return (
    <div className={styles.PostCard}>
      <h1>{title}</h1>
      <p>{teaser}</p>
      <a href={link}>
        <Button type="Primary" text="Read"/>
      </a>
    </div>
  )
}

export default PostCard;