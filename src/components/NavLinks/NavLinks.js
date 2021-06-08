import React from 'react';
import classnames from 'classnames';
import styles from './NavLinks.module.scss';

const NavLinks = ({open, handleOpen}) => {

  const navLinksClassNames = classnames(styles.NavLinks, {[styles.Open]: open} )
  return (
    <nav className={styles.Nav}>
      <ul className={navLinksClassNames} onClick={() => handleOpen(false)}>
        <li className={styles.NavLink}>
          <a>About</a>
        </li>
        <li className={styles.NavLink} onClick={() => handleOpen(false)}>
          <a>Projects</a>
        </li>
        <li className={styles.NavLink} onClick={() => handleOpen(false)}>
          <a>Posts</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavLinks;