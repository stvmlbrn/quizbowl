import React from 'react';
import PropTypes from 'prop-types';

function TeamsForm(props) {
  const { toggleTeamsForm } = props;

  return (
    <div>
      <h2>Configure Teams</h2>
      <form className="form-horizontal">
        <div className="form-group">
          <label htmlFor="team1" className="control-label col-sm-3">Team 1</label>
          <div className="col-sm-9">
            <input type="text" id="team1" name="team1" className="form-control" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="team2" className="control-label col-sm-3">Team 2</label>
          <div className="col-sm-9">
            <input type="text" id="team2" name="team2" className="form-control" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="team3" className="control-label col-sm-3">Team 3</label>
          <div className="col-sm-9">
            <input type="text" id="team3" name="team3" className="form-control" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="team4" className="control-label col-sm-3">Team 4</label>
          <div className="col-sm-9">
            <input type="text" id="team4" name="team4" className="form-control" />
          </div>
        </div>

        <div className="form-group">
          <div className="col-sm-9 col-sm-offset-3">
            <button className="btn btn-primary btn-lg">
              <i className="fa fa-plus-circle" /> Create Game
            </button>

            <button type="button" className="btn btn-danger btn-lg" onClick={toggleTeamsForm}>
              <i className="fa fa-times-circle" /> Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

TeamsForm.PropTypes = {
  toggleTeamsForm: PropTypes.func.isRequired,
};

export default TeamsForm;
