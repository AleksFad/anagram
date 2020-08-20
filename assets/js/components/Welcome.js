import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import {Button} from "reactstrap";
import Navbar from "./Navbar";

const Welcome = () => {
    return (
        <Fragment>
            <Navbar />
            <div className="welcome-msg">
                <h1>Welcome to anagram finder</h1>
                <Link to="/fetch"><Button size="lg" className={"btn-fetch"} color="success">Fetch</Button>{' '}</Link>
                <Link to="/search"><Button size="lg" className={"btn btn-find"} color="primary">Find</Button>{' '}</Link>
            </div>
            </Fragment>
    );
}

export default Welcome;
