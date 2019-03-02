import React, { Component } from 'react';
import NotFound from '../../components/NotFound/NotFound';
import './FilmsDetails.css';

class FilmsDetails extends Component {
    state = {
        data: null,
        isLoading: true,
        id: null
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        const { id } = this.props.match.params;
        
        fetch(`https://swapi.co/api/films/${id}?format=json`)
            .then(response => response.json())
            .then(json => {
                this.setState({ data: json, isLoading: false })
            });
    }

    render() {
        const { isLoading, data } = this.state;
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
                        <table>
                            <tbody>
                                <tr>
                                    <td>Title</td>
                                    <td>{ data.title }</td>
                                </tr>
                                <tr>
                                    <td>Opening Crawl</td>
                                    <td>{ data.opening_crawl }</td>
                                </tr>
                                <tr>
                                    <td>Director</td>
                                    <td>{ data.director }</td>
                                </tr>
                                <tr>
                                    <td>Producer</td>
                                    <td>{ data.producer }</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                }
            </div>
        );
    }
}

export default FilmsDetails;