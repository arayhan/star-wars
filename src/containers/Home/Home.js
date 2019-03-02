import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
    state = {
        listCategory: null,
        isLoading: true,
    }

    componentDidMount() {
        this.setState({ isLoading: true })
        fetch(`https://swapi.co/api/?format=json`)
            .then(response => response.json())
            .then(json => {
                this.setState({ listCategory: json, isLoading: false })
            });
    }

    render() {
        let { listCategory, isLoading } = this.state;
        let listCategoryKeys = null;

        if (!isLoading) {
            listCategoryKeys = Object.keys(listCategory);
        }

        return (
            <div className="container-x container-content">
                <div className="list-category">
                    {
                        isLoading
                        &&
                        <p>Loading...</p>
                    }
                    {
                        !isLoading && !listCategoryKeys
                        &&
                        <p>Data tidak ditemukan</p>
                    }
                    {
                        !isLoading && listCategoryKeys
                        &&
                        listCategoryKeys.map(categoryItem => {
                            return (
                                <Link to={ `/${ categoryItem }` } key={ categoryItem } className="category-item"> { categoryItem } </Link>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Home;