import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NotFound from '../../components/NotFound/NotFound';
import './CategoryItems.css';

class CategoryItems extends Component {
    state = {
        data: null,
        isLoading: true,
        listCategory: null,
        currentCategory: null,
        page: 1
    }

    componentDidMount() {
        const { currentCategory } = this.props.match.params;
        let { page } = this.state;

        this.setState({ isLoading: true });
        console.log(page);
        fetch(`https://swapi.co/api/${currentCategory}/?page=${page}&format=json`)
            .then(response => response.json())
            .then(json => {
                this.setState({ data: json, isLoading: false, currentCategory })
            });
        
        fetch(`https://swapi.co/api/?format=json`)
            .then(response => response.json())
            .then(json => {
                this.setState({ listCategory: json, isLoading: false })
            });
    }

    render() {
        let { isLoading, listCategory, currentCategory } = this.state;
        let listCategoryKeys = null;
        if (!isLoading) {
            listCategoryKeys = Object.keys(listCategory);
            console.log(listCategory, currentCategory);
            console.log(listCategoryKeys.includes(currentCategory))
        }

        return (
            <div className="container-x container-content">
                {
                    isLoading
                    &&
                    <div>Loading...</div>
                }
                {
                    !isLoading && !listCategoryKeys
                    &&
                    <NotFound></NotFound>
                }
                {
                    !isLoading && listCategoryKeys
                    &&
                    <p>DATANYA ADA</p>
                }
            </div>
        )
    }
}

export default CategoryItems;