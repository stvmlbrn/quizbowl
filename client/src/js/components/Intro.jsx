import React from 'react';
import PropTypes from 'prop-types';

function Intro(props) {
  const { toggleTeamsForm } = props;
  return (
    <div>
      <h2><em>Shall we play a game?</em></h2>
      <p>
        A fun jeopardy-like game to test your Maryland facts!
      </p>
      <p>
        <button className="btn btn-primary btn-lg" onClick={toggleTeamsForm}>
          <i className="fa fa-plus-circle" /> New Game
        </button>
      </p>
      <p>
        <button className="btn btn-warning btn-lg">
          Join Game
        </button>
      </p>
    </div>
  );
}

Intro.propTypes = {
  toggleTeamsForm: PropTypes.func.isRequired,
};

export default Intro;
