import React from 'react';
import styles from './ThemeOption.module.scss';

const ThemeOption = ({onClick, color}) => {
  return (
    <button onClick={() => onClick(color)} aria-label={color} id={color} className={`${styles.Option} + ${styles[color]}`}></button>
  )
}

export default ThemeOption;