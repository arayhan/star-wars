import React, { Component } from 'react';
import NotFound from '../../components/NotFound/NotFound';
import './VehiclesDetails.css';

class VehiclesDetails extends Component {
    state = {
        data: null,
        isLoading: true,
        id: null
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        const { id } = this.props.match.params;
        
        fetch(`https://swapi.co/api/vehicles/${id}?format=json`)
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
                                    <td>Cargo Capacity</td>
                                    <td>{ data.cargo_capacity }</td>
                                </tr>
                                <tr>
                                    <td>Cost in Credits</td>
                                    <td>{ data.cost_in_credits }</td>
                                </tr>
                                <tr>
                                    <td>Crew</td>
                                    <td>{ data.crew }</td>
                                </tr>
                                <tr>
                                    <td>Manufacturer</td>
                                    <td>{ data.manufacturer }</td>
                                </tr>
                                <tr>
                                    <td>Model</td>
                                    <td>{ data.model }</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                }
            </div>
        );
    }
}

export default VehiclesDetails;