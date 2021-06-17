import React from 'react';
import styles from './TechList.module.scss';

const TechList = () => {
  return (
    <ul className={styles.TechList} >
      <li>Ruby</li>
      <li>JavaScript</li>
      <li>Ruby on Rails</li>
      <li>React + Redux</li>
      <li>CSS + Sass</li>
      <li>Figma</li>
      <li>Illustrator</li>
      <li>InDesign</li>
    </ul>
  )
}

export default TechList;