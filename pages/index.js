import React, {useState} from 'react';
import Blog from '../template/Blog'
import App from '../components/App';

const Home = () => {
    const [state, setState] = useState(true);
    const changeMe = ()=> setState(!state);
    return (
        <>
            {/* <link href="../static/hero.css" rel="stylesheet" /> */}
            {
             state ? 
                <App style={{height:'100%'}}/> : 
                <Blog />
            }
            <button style={{'display':'none'}} onClick={changeMe}>DON'T</button>
        </>
    );
}

export default Home

