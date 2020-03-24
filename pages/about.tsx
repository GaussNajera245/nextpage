import React from 'react';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/Footer';
import { Grid, Paper, Divider } from '@material-ui/core';
import { SectionType } from '../models/types.models';
import { Paragraph, Title1, Title2 } from '../components/Text';

const sections: SectionType[] = [
  { title: 'Our Features', url: '/' },
  { title: 'About', url: 'about' },
  { title: 'Contact', url: '/' },
];

const paragraph1 = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. `;
const paragraph2 = `It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. `;

const About:React.FC = () => {
    return (
      <>
        <Navbar sections={sections} title={'Blog'}/>
        <Grid container direction="row" justify="center" alignItems="stretch" style={{marginTop:16}} >
          <Grid item sm={10}>
            <Paper style={{ minHeight:'350px', padding:24}}>
              <Title1 text='About Us:'/>
              <Divider />
              <Title2 text='Who are we?'/>
              <Paragraph text={paragraph1}/>
              <br />
              <Title2 text='What do we use it?'/>
              <Paragraph text={paragraph2}/>
            </Paper>
          </Grid>
        </Grid>
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