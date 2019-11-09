import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup, removeSessionErrors } from '../../../actions/session_actions';

import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
    // debugger
    return {
        errors: errors.sessionErrors,
        formType: 'Sign Up',
        navLink: <Link to="/login">Log In</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        clearErrors: () => dispatch(removeSessionErrors()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);