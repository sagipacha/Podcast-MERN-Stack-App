import React from 'react';
import { Link } from 'react-router-dom';

const Explore = () => {
return (
    <div>
        <img
        src="https://static.vecteezy.com/system/resources/previews/018/921/386/non_2x/black-gaming-headphone-isolated-for-music-and-podcast-design-element-png.png"
        alt="Explore"
        style={{ width: '200px', height: '200px' }}
        />
        <h2>
            Welcome to <br />
            SonicSphere
        </h2>
        <Link to="/Authentication">
            <button>Explore</button>
        </Link>
    </div>
);
}

export default Explore;