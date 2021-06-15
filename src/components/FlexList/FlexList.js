import React from 'react';
import styles from './FlexList.module.scss';

const FlexList = ({children}) => {
  return (
    <div className={styles.FlexList}>
      {children}
    </div>
  )
}

export default FlexList;