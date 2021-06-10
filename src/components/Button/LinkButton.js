import React from 'react';
import classnames from 'classnames';
import styles from './Button.module.scss';

const LinkButton = ({text, type, wide, link}) => {
  
  const classNames = classnames(styles.Button, {[styles[type]]: type, [styles.Wide]: wide})

  return (
    <div className="test">
      <a className={classNames} href={link}>
         {text}
      </a>
    </div>
  )
}

export default LinkButton;