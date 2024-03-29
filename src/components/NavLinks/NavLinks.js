import React from 'react';
import classnames from 'classnames';
import styles from './NavLinks.module.scss';
import { Link } from 'react-scroll';

const NavLinks = ({open, handleOpen}) => {

  const navLinksClassNames = classnames(styles.NavLinks, {[styles.Open]: open})

  return (
    <nav className={styles.Nav}>
      <ul className={navLinksClassNames}>
        <li className={styles.NavLink} >
          <Link 
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            offset={-32}
            onClick={() => handleOpen(false)}
            tabIndex="0"
          >
            About
          </Link>
        </li>
        <li className={styles.NavLink} >
          <Link 
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            offset={-32}
            onClick={() => handleOpen(false)}
            tabIndex="0"
          >
            Projects
          </Link>
        </li>
        <li className={styles.NavLink}>
        <Link 
            to="posts"
            spy={true}
            smooth={true}
            duration={500}
            offset={-32}
            onClick={() => handleOpen(false)}
            tabIndex="0"
          >
            Posts
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavLinks;