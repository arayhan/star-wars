import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NotFound from '../../components/NotFound/NotFound';
import './People.css';

class People extends Component {
    state = {
        data: null,
        isLoading: true,
        api: 'https://swapi.co/api/people?format=json&page=1'
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        const { api } = this.state;
        
        fetch(api)
            .then(response => response.json())
            .then(json => {
                this.setState({ data: json, isLoading: false })
            });
    }

    handleClick = (api) => {
        this.setState({ api });
        this.componentDidMount();
    }

    render() {
        let { isLoading, data, page } = this.state;
        console.log(data);

        return (
            <div className="container-x container-content">
                {
                    isLoading
                    &&
                    <div>Loading...</div>
                }
                {
                    !isLoading && !data
                    &&
                    <NotFound></NotFound>
                }
                {
                    !isLoading && data
                    &&

                    <div>
                        <h4>Total People : <b>{ data.count }</b></h4>
                        <ul className="list">
                        { 
                            data.results.map((value, key) => {
                                return (
                                    <li className="list-item" key={ `${ value.name }-${ key }` }><Link to={ `/people/${ key + 1 }` }> { value.name } </Link></li>
                                );
                            })
                        }
                        </ul>
                        <div className="pagination">
                            { 
                                ( data.previous !== null ) 
                                && 
                                <button onClick={ () => this.handleClick(data.previous) }><i className="fas fa-angle-left"></i> Back</button>
                            }
                            { 
                                ( data.next !== null ) 
                                && 
                                <button onClick={ () => this.handleClick(data.next) }>Next <i className="fas fa-angle-right"></i></button>
                            }
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default People;