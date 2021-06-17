import React from 'react';
import styles from './PostsWrapper.module.scss';

const FlexList = ({children}) => {
  return (
    <div className={styles.FlexList}>
      {children}
    </div>
  )
}

export default FlexList;