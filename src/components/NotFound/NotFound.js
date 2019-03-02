import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = (props) => {
    return (
        <div className="not-found container-x container-content">
            <h1>Data Not Found</h1>
            <Link to={ '/' } className="btn-second">Back to home</Link>
        </div>
    )
}

export default NotFound;