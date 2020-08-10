import React from 'react';
import {Link} from 'react-router-dom';

function NotFoundPage(){
    return (
        <div data-testid ="notfound" className="container">
            <p>404! - <Link to="/">Go Home</Link></p>
        </div>
    )
}

export default NotFoundPage;