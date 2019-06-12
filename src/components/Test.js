import React from 'react';
import { Link } from 'react-router-dom'


const Test = ({match}) => {
    return (
        <div>
            <h1>Hi, I am single post! { match.params.postId }</h1>
            <Link to='/'>Back to Home</Link>
        </div>
    )
}

export default Test