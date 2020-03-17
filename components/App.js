import React from 'react';
import HeroHeader from './Header/HeroHeader';
import Form from './FormPart/Form';
import Features from './FeaturesPart/Features';
import Footer from './Footer/Footer'
// import './app.module.css';


const App = () => {
    return (
        <>
            {/* <HeroHeader /> */}
            <Features />
            <Form />  
            <Footer title="WebApp" description="Page for dummy purpouses" /> 
        </>
    );
};
export default App;

