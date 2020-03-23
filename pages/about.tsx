import React from 'react';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';
import { FeaturesType, SectionType, HeroHeaderType } from '../models/types.models'
import app from '../components/app.module.css';

const sections: SectionType[] = [
  { title: 'Our Features', url: '/' },
  { title: 'About', url: 'about' },
  { title: 'Contact', url: '/' },
];

const About:React.FC = () => {
    return (
      <>
        <Navbar sections={sections} title={'Blog'}/>

        <h1>HALLO</h1>
        <Footer /> 
        
        <style global jsx>{`
        body {
          height:97vh;
          background-color: #fafafa;
          background-image: linear-gradient(#063958, #fafafa);
        }
      `}</style>
      </>
    )
};

export default About;