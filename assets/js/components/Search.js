import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import axios from 'axios';

import Welcome from './Welcome';

const Search = () => {

    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [searchState, setSearchState] = useState('');
    const [result, setResult] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        (search.length > 0) ? setSearchState('has-success') : (setSearchState('has-danger'));
        execute(search);
    }

    const execute = (search) => {
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        const formData = new FormData();
        formData.append('search', search);
        axios.post(`http://127.0.0.1:8000/api/search`, formData, config)
            .then(response => {
                setResult(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
            });
    }

    const handleSearch = (e) => {
        const input = e.target.value.toLowerCase();
        (input.length > 0) ? setSearchState('has-success') : setSearchState('has-danger');
        setSearch(input);
    };

    return(
        <div>
            <Welcome />
            <section className="row-section search-row">
                <div className="container">
                    <div className="row">
                        <h2 className="text-center">Search for Anagrams</h2>
                    </div>
                    {loading ? (
                        <div className={'row text-center'}>
                            <span className="fa fa-spin fa-spinner fa-4x"></span>
                        </div>
                    ) : (
                        <div className={'row text-center'}>
                            <Form name={'search-form'} inline onSubmit={ (e) => submitForm(e) }>
                                <FormGroup check className="mb-2 mr-sm-2 mb-sm-0">
                                    <Input
                                        valid={ searchState === 'has-success' }
                                        invalid={ searchState === 'has-danger' }
                                        value={ search }
                                        type="text"
                                        name="search"
                                        id="search"
                                        placeholder="Type here..."
                                        onChange={(e) => {
                                            handleSearch(e);
                                        }}
                                    />
                                    <FormFeedback valid>That it is sweet</FormFeedback>
                                    <FormFeedback>String cannot be blank</FormFeedback>
                                </FormGroup>
                                <Button disabled={!search} type="submit" color="success" value="search">Search</Button>
                            </Form>

                        </div>
                    )}
                </div>
            </section>
            <section className="row-section search-result">
                { result ?
                    <div className="result-block">
                        <h2>Result of search</h2>
                        <ul className="result">
                            { result.length > 0 ? (
                                result.map((res,index) =>
                                    <li key={index}>{res.anagram}</li>
                                )
                            ) : (
                                <li>Nothing found. Try again!</li>
                            )}
                        </ul></div>
                    : '' }
            </section>
        </div>
    )
}

export default Search;