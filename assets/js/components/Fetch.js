import React, { useEffect,useState } from 'react';
import axios from 'axios';

import Welcome from './Welcome';


const Fetch = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/fetch`).then(() => {
            setLoading(false);
        })
    },[]);

        return (
            <div>
                <Welcome />
                <section className="row-section fetch-status">
                    <div className="container">
                        {loading ? (
                            <div className={'row text-center row-spinner'}>
                                <span className="fa fa-spin fa-spinner fa-4x" />
                            </div>

                        ) : (
                            <div className={'row'}>
                                <h2>Wordbase is up to date!</h2>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        )
}

export default Fetch;