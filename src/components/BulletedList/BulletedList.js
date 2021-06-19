import React from 'react';
import styles from './BulletedList.module.scss';

const BulletedList = ({children}) => {
  return (
    <ul className={styles.List}>
      {children}
    </ul>
  )
}

export default BulletedList;