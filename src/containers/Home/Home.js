import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
    state = {
        data: null,
        isLoading: true,
    }

    componentDidMount() {
        this.setState({ isLoading: true })
        fetch(`https://swapi.co/api/?format=json`)
            .then(response => response.json())
            .then(json => {
                this.setState({ data: json, isLoading: false })
            });
    }

    render() {
        let { data, isLoading } = this.state;
        let keys = null;

        if (!isLoading) {
            keys = Object.keys(data);
            console.log(keys);
        }

        return (
            <div>
                <div class="categories">
                    {
                        keys !== null
                        &&
                        keys.map(value => {
                            return (
                                <Link to={ `/${ value }` } className="category"> { value } </Link>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Home;