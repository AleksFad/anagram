import React, {Component} from 'react';
import axios from 'axios';

import Welcome from './Welcome';

class Fetch extends Component {
    constructor() {
        super();
        this.state = { loading: true}
    }

    componentDidMount() {
        this.getDatabase();
    }

    getDatabase() {
        axios.get(`http://127.0.0.1:8000/api/fetch`).then(res => {
            this.setState({ loading: false })
        })
    }

    render() {
        const loading = this.state.loading;
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
}

export default Fetch;