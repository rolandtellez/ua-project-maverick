import React, { Component } from 'react';

import "./team.css";

class Team extends Component {

    constructor() {
        super();
        this.state = {
            team: []
        }
    }

    componentDidMount() {
        fetch('/api/team')
        .then(res => res.json())
        .then(team => this.setState({team}, () => console.log("Project Maverick Team Members:", team)));
    }

    render() {

        return (
            <div>
                <h1>Express React Project Team</h1>
                <ul>
                    {this.state.team.map(team => 
                    <li key={team.id}>{team.firstName} {team.lastName}</li>
                    )}   
                </ul>
            </div>
          );

    }
}
export default Team;