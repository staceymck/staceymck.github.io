import React from 'react';
import styles from './BulletedList.module.scss';
import classnames from 'classnames';

const BulletedList = ({listItems, listStyle}) => {

  const classNames = classnames(styles.List, styles[listStyle])
  
  return (
    <ul className={classNames}>
      {listItems}
    </ul>
  )
}

export default BulletedList;