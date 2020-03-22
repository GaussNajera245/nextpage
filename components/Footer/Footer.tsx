import React from 'react';
import f from './footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={f.footer}>
      <p className={f.text}>Copyright ⓒ {currentYear}</p>
    </footer>
  );
};

export default Footer;
