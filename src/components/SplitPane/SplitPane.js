import React from 'react';
import styles from './SplitPane.module.scss';

const SplitPane = ({left, right}) => {
  return (
      <div className={styles.SplitPane}>
        <div className={styles.SplitPaneImg}>
          {left}
        </div>
        <div className={styles.SplitPaneText}>
          {right}
        </div>
    </div>
  )
}

export default SplitPane;