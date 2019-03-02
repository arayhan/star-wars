import React, { Component } from 'react';
import NotFound from '../../components/NotFound/NotFound';
import './SpeciesDetails.css';

class SpeciesDetails extends Component {
    state = {
        data: null,
        isLoading: true,
        id: null
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        const { id } = this.props.match.params;
        
        fetch(`https://swapi.co/api/species/${id}?format=json`)
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
                                    <td>Name</td>
                                    <td>{ data.name }</td>
                                </tr>
                                <tr>
                                    <td>Classification</td>
                                    <td>{ data.classification }</td>
                                </tr>
                                <tr>
                                    <td>Designation</td>
                                    <td>{ data.designation }</td>
                                </tr>
                                <tr>
                                    <td>Eye Colors</td>
                                    <td>{ data.eye_colors }</td>
                                </tr>
                                <tr>
                                    <td>Hair Colors</td>
                                    <td>{ data.hair_colors }</td>
                                </tr>
                                <tr>
                                    <td>Language</td>
                                    <td>{ data.language }</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                }
            </div>
        );
    }
}

export default SpeciesDetails;