import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/authenticationActions';
import Main from '../Main';

export class MainPage extends React.Component {

	login() {
		console.log("hello")
		this.props.actions.login("amit", "password");
	}

  render() {
    return (
      <Main
      	login={this.login.bind(this)}
      />
    );
  }
}

MainPage.propTypes = {
  actions: PropTypes.object.isRequired,
  authentication: PropTypes.object.isRequired
};

function mapStateToProps(state) {
	console.log("state")
	console.log(state)
  return {
    authentication: state.authentication
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
