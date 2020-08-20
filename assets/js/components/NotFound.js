import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';

const NotFound = () =>
    <Fragment>
        <Navbar />
        <div className={'not-found'}>
            <h1>404 page not found</h1>
            <p>We are sorry but the page you are looking for does not exist.</p>
            <Link to="/">Go to Home </Link>
        </div>
    </Fragment>

export default NotFound;