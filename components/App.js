import React, {div} from 'react';
import {AssignmentTwoTone, HomeTwoTone, PanToolTwoTone, FingerprintTwoTone, FavoriteTwoTone, ExploreTwoTone} from '@material-ui/icons';
import HeroHeader from './Header/HeroHeader';
import Form from './FormPart/Form';
import Features from './FeaturesPart/Features';
import Footer from './Footer/Footer'
import Navbar from './Header/Navbar';
import app from './app.module.css';

const sections = [
    { title: 'Technology', url: '#' },
    { title: 'Design', url: '#' },
    { title: 'About Us', url: 'about' },
    { title: 'Business', url: '#' },
    { title: 'Politics', url: '#' },
    { title: 'Opinion', url: '#' },
    { title: 'Science', url: '#' },
    { title: 'Health', url: '#' },
    { title: 'Style', url: '#' },
    { title: 'Travel', url: '#' },
];

const allFeatures = [
    {   title:'Etwas',
        icon: <AssignmentTwoTone style={{marginBottom:-3}} />,
        text:'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
    },
    {   title:'Irgendwo',
        icon: <FingerprintTwoTone style={{marginBottom:-3}} />,
        text:'consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas'
    },
    {   title:'Schwartz',
        icon: <HomeTwoTone style={{marginBottom:-3}} />,
        text:'delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi'
    },
    {   title:'Gesundheit',
        icon: <PanToolTwoTone style={{marginBottom:-2}} />,
        text:'aut est omnis dolores\nneque rerum quod ea rerum velit pariatur beatae excepturi\net provident voluptas corrupti\ncorporis harum reprehenderit dolores eligendi'
    },
    {   title:'Krankheit',
        icon: <FavoriteTwoTone style={{marginBottom:-3}}  />,
        text:'reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae'
    },
    {   title:'Wissen',
        icon: <ExploreTwoTone style={{marginBottom:-3}} />,
        text:'repellat aut aperiam totam autem et\narchitecto magnam ut\nconsequatur qui cupiditate rerum quia soluta dignissimos nihil iure\ntempore quas est'
    },
];

const mainFeaturedPost = {
    title: 'Title of a longer featured blog post',
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://source.unsplash.com/random',
    imgText: 'main image description',
    linkText: 'Continue reading…',
  };
  

const App = () => {
    return (
        <div className={app.body}>
            <Navbar sections={sections} title={'Blog'}/>
            <HeroHeader post={mainFeaturedPost} />
            <Features features={allFeatures} />
            <Form />  
            <Footer title="WebApp" description="Page for dummy purpouses" /> 
        </div>
    );
};
export default App;

