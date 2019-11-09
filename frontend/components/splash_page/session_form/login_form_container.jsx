import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login, removeSessionErrors } from '../../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.sessionErrors,
        formType: 'Log In',
        navLink: <Link to="/signup">Sign Up</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        clearErrors: () => dispatch(removeSessionErrors()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
