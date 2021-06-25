import React, {useState, useEffect, useRef} from 'react';
import ThemeOption from '../ThemeOption/ThemeOption';
import logo from '../../assets/logo.png';
import NavLinks from '../NavLinks/NavLinks';
import styles from './Navbar.module.scss';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({onClick}) => {
  const [open, setOpen] = useState(false)
  
  const ref = useRef()

  useEffect(() => {
    const checkIfOutsideClick = e => {
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }  

    document.addEventListener("mousedown", checkIfOutsideClick)

    return () => {
      document.removeEventListener("mousedown", checkIfOutsideClick)
    }
  }, [open])


  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleKeyPress = (e) => {
    console.log(e)
    if (e.code === "Enter") {
      setOpen(!open)
    }
  }

  return (
    <header ref={ref}>
      <div className={styles.Wrapper}>
        <div className={styles.LogoBlock}>
          <img 
            className={styles.Logo} 
            src={logo} 
            alt="Letters S M"
            onClick={scrollToTop}
            tabIndex="0"
          />
          <div className={styles.ThemeSelector}>
            <ThemeOption onClick={onClick} color="Purple"/>
            <ThemeOption onClick={onClick} color="Orange"/>
            <ThemeOption onClick={onClick} color="Teal"/>
          </div>
        </div>

        <NavLinks open={open} handleOpen={setOpen}/>

        <span 
          className={styles.Hamburger} 
          onClick={() => setOpen(!open)} 
          tabIndex="0" 
          aria-label="Toggle navigation menu"
          onKeyPress={handleKeyPress}
        >
          <i className="fa fa-bars"></i>
        </span>
      </div>
    </header>
  )
}

export default Navbar;