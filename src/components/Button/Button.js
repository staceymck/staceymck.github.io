import React from 'react';
import classnames from 'classnames';
import styles from './Button.module.scss';

const Button = ({text, type, wide}) => {
  
  const classNames = classnames(styles.Button, {[styles[type]]: type, [styles.Wide]: wide})

  return (
    <button className={classNames}>
      {text}
    </button>
  )
}

export default Button;