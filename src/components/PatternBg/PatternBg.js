import React from 'react';
import classnames from 'classnames';
import styles from './PatternBg.module.scss';

const PatternBg = ({position}) => {

  const classNames = classnames({[styles[position]]: position})
  
  return (
    <div className={styles.Opacity}>
    <svg className={classNames} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 400">
      <path className={styles.Cls1} d="M427.65,281.46c-12.38-15.56-26.2-9-56.74-28.54-22-14.11-20.75-24.71-30.06-33.83-7-6.89-15.26-9.49-22.09-11.59-19.5-6-48.6-5.25-73.37,8.11-35,18.87-43.41,53.3-45.49,66.36-1.45,9.11-5.22,41.77,17.8,71.47,34.11,44,96.89,42.66,111,42.37,18.31-.38,64.56-1.35,90.69-34.19C437.35,339.07,444.69,302.89,427.65,281.46Z"/>
      <path className={styles.Cls2} d="M409.43,151.78c-23-25-44-10.14-97.09-38.12-38.27-20.19-38.22-39.37-55-53.52-12.67-10.69-26.45-13.48-37.89-15.69-32.63-6.29-79.51,1.54-117,30.89C49.56,116.8,42.48,180,41.6,203.73,41,220.29,41.1,279.3,84,327c63.45,70.68,164.63,54.27,187.39,50.58,29.52-4.78,104.06-16.87,140-81.22C436.06,252.2,441,186.13,409.43,151.78Zm-49,138.14c-44.11,60.92-184.33,51.35-240.53-19.53-6-7.57-35.63-46.85-24.51-93.77,10.88-45.92,56.73-79.24,92-78.14,33.89,1.06,35.12,51.15,74.49,65.37,28.73,10.38,44.31-8.94,88.76,2.63C385.12,175.44,387.51,252.57,360.47,289.92Z"/>
      <ellipse className={styles.Cls1} cx="199.19" cy="169.84" rx="14.44" ry="14.8" transform="translate(-10.98 13.79) rotate(-3.86)"/>
      <ellipse className={styles.Cls3} cx="113.56" cy="33.32" rx="14.68" ry="17.63" transform="translate(-1.98 7.72) rotate(-3.86)"/>
      <ellipse className={styles.Cls2} cx="147.5" cy="28.84" rx="10.37" ry="10.12" transform="translate(31.63 124.56) rotate(-50.62)"/>
      <ellipse className={styles.Cls4} cx="173.35" cy="201.68" rx="41.23" ry="42.27" transform="translate(-13.18 12.12) rotate(-3.86)"/>
      <ellipse className={styles.Cls3} cx="10.15" cy="331.98" rx="7.38" ry="7.43" transform="translate(-321.97 328.65) rotate(-87.67)"/>
      <circle className={styles.Cls3} cx="48.85" cy="306.23" r="31.22"/>
      <ellipse className={styles.Cls1} cx="43.57" cy="307.16" rx="15.39" ry="15.49" transform="translate(-265.11 338.22) rotate(-87.67)"/>
      <path className={styles.Cls5} d="M113.21,212.13c-12.48-34.14-7.53-64.27-5.4-76.34,14.06-79.52,84.66-113,89.92-115.41,72.61-32.94,171-4.54,186.78,41.58,5.12,15,2.27,33.91-12.28,57.33-65.53,105.44-5.85,161.47-72.82,189C238.75,333.16,141.4,289.24,113.21,212.13Z"/>
    </svg>
    </div>
  )
}

export default PatternBg;