import React from 'react';
import f from './footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  console.log(f);
  return (
    <footer className={f.footer}>
      <p className={f.text}>Copyright ⓒ {currentYear}</p>
    </footer>
  );
};

export default Footer;
