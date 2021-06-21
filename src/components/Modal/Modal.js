import React, { useEffect, useRef } from 'react';
import styles from './Modal.module.scss';

const Modal = ({children, onModalClose}) => {

  const modalRef = useRef(null);

  useEffect(() => {
    document.body.classList.add(styles.ModalOpen);
    return () => {
      document.body.classList.remove(styles.ModalOpen);
    }
  }, []);

  useEffect(() => {
    function handleClick(e) {
      if (!modalRef.current?.contains(e.target)) {
        onModalClose();
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick)
  })

  useEffect(() => {
    function handleKeydown(e) {
      const listener = keyMap.get(e.keyCode);
      return listener && listener(e)
    }
    document.addEventListener("keydown", handleKeydown)
    return () => document.removeEventListener("keydown", handleKeydown)
  })


  const handleTab = e => {
    const focusableElements = modalRef.current.querySelectorAll("a[href], button");
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (!e.shiftKey && document.activeElement === lastElement) {
      firstElement.focus();
      e.preventDefault();
    }

    if (e.shiftKey && document.activeElement === firstElement) {
      lastElement.focus();
      e.preventDefault();
    }
  }

  const keyMap = new Map([[27, onModalClose], [9, handleTab]]);
  
  return (
    <div className={styles.ModalContainer} role="dialog" aria-modal="true">
      <div className={styles.ModalContent} ref={modalRef}>
        <div className={styles.ModalHeader}>
          <button className={styles.CloseBtn} title="Close modal" onClick={onModalClose}>
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Modal;