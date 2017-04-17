import React, { Component } from 'react';

import Intro from '../components/Intro';
import TeamsForm from '../components/TeamsForm';

import Logo from '../../img/md_pride.jpg';

export default class extends Component {
  constructor() {
    super();
    this.state = {
      teams: {
        team1: { name: '', score: 0 },
        team2: { name: '', score: 0 },
        team3: { name: '', score: 0 },
        team4: { name: '', score: 0 },
      },
      addTeams: false,
    };
  }

  toggleTeamsForm = () => {
    const { addTeams } = this.state;
    this.setState({addTeams: !addTeams});
  }

  render() {
    const { addTeams, teams } = this.state;
    return (
      <div className="container">
        <div className="col-sm-7 text-center">
          <img src={Logo} alt="Maryland Facts QuizBowl" />
        </div>
        <div className="col-sm-5">
          <div className="hero text-center">
            {addTeams
              ? <TeamsForm teams={teams} toggleTeamsForm={this.toggleTeamsForm} />
              : <Intro toggleTeamsForm={this.toggleTeamsForm} />
            }
          </div>
        </div>
      </div>
    );
  }
}

