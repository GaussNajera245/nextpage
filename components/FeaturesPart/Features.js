import React from 'react';
import {AssignmentTwoTone, HomeTwoTone, PanToolTwoTone, FingerprintTwoTone, FavoriteTwoTone, ExploreTwoTone} from '@material-ui/icons';
import FeatureList from './FeatureList'

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

const Features = props => {
    return(
        <FeatureList features={allFeatures} />
    );
};

export default Features;
