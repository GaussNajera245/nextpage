import React, {useState} from 'react';
import Blog from '../template/Blog'
import App from '../components/App';

const Home:React.FC = () => {
    const [state, setState] = useState<boolean>(true);
    const changeMe = ()=> setState(!state);
    return (
        <>
            {/* <link href="../static/hero.css" rel="stylesheet" /> */}
            {
             state ? 
                <App /> : 
                <Blog />
            }
            <button style={{'display':'none'}} onClick={changeMe}>DON'T</button>
        </>
    );
}

export default Home

