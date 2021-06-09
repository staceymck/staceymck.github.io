import React from 'react';
import classnames from 'classnames';
import styles from './SplitPane.module.scss';

const SplitPane = ({left, right, reverse}) => {
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