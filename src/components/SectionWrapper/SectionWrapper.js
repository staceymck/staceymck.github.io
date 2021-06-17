import React from 'react';
import styles from './SectionWrapper.module.scss';
import classnames from 'classnames'

const SectionWrapper = ({content, grayBg}) => {

  const classNames = classnames(styles.SectionWrapper, {[styles.GrayBg]: grayBg})
  return (
    <section className={classNames}>
      {content}
    </section>
  )
}

SectionWrapper.defaultProps = {
  grayBg: false
}

export default SectionWrapper;

