// src/components/common/CustomCursor.js
import React, { useEffect, useState } from 'react';
import styles from '../../styles/components/CustomCursor.module.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseEnter = () => setIsHidden(false);
    const onMouseLeave = () => setIsHidden(true);

    const onElementHover = (e) => {
      const target = e.target;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button'
      );
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseover', onElementHover);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseover', onElementHover);
    };
  }, []);

  if (typeof window === 'undefined') return null;

  return (
    <>
      <div
        className={`${styles.cursor} ${isPointer ? styles.pointer : ''} ${
          isHidden ? styles.hidden : ''
        }`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <div
        className={`${styles.cursorFollower} ${isPointer ? styles.pointer : ''} ${
          isHidden ? styles.hidden : ''
        }`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
    </>
  );
};

export default CustomCursor;