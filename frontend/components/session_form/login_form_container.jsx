import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Log In',
        navLink: <Link to="/signup">Sign Up</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
