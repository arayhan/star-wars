import React, { Component } from 'react';
import NotFound from '../../components/NotFound/NotFound';
import './PlanetsDetails.css';

class PlanetsDetails extends Component {
    state = {
        data: null,
        isLoading: true,
        id: null
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        const { id } = this.props.match.params;
        
        fetch(`https://swapi.co/api/planets/${id}?format=json`)
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
                                    <td>Climate</td>
                                    <td>{ data.climate }</td>
                                </tr>
                                <tr>
                                    <td>Diameter</td>
                                    <td>{ data.diameter }</td>
                                </tr>
                                <tr>
                                    <td>Gravity</td>
                                    <td>{ data.gravity }</td>
                                </tr>
                                <tr>
                                    <td>Population</td>
                                    <td>{ data.population }</td>
                                </tr>
                                <tr>
                                    <td>Terrain</td>
                                    <td>{ data.terrain }</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                }
            </div>
        );
    }
}

export default PlanetsDetails;