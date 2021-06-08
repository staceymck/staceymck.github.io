import React from 'react';
import styles from './ThemeOption.module.scss';

const ThemeOption = ({color}) => {
  return (
    <button aria-label={color} id={color} className={`${styles.Option} + ${styles[color]}`}></button>
  )
}

export default ThemeOption;