import React from 'react';
import { Link } from 'react-router-dom'

const Home = (props) => {
    return (
        <div>
            <h1>I am Home { props.name }</h1>
            <Link to='/test/post-1'>Post 1 </Link> |
            <Link to='/test/post-2'> Post 2 </Link> |
            <Link to='/test/post-101'> Post 101</Link>
        </div>
    )
}

export default Home