import React, { Component } from 'react';
import NotFound from '../../components/NotFound/NotFound';
import './PeopleDetails.css';

class PeopleDetails extends Component {
    state = {
        data: null,
        isLoading: true,
        id: null
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        const { id } = this.props.match.params;
        
        fetch(`https://swapi.co/api/people/${id}?format=json`)
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
                                    <td>Gender</td>
                                    <td>{ data.gender }</td>
                                </tr>
                                <tr>
                                    <td>Height</td>
                                    <td>{ data.height }</td>
                                </tr>
                                <tr>
                                    <td>Mass</td>
                                    <td>{ data.mass }</td>
                                </tr>
                                <tr>
                                    <td>Hair Color</td>
                                    <td>{ data.hair_color }</td>
                                </tr>
                                <tr>
                                    <td>Skin Color</td>
                                    <td>{ data.skin_color }</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                }
            </div>
        );
    }
}

export default PeopleDetails;