import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Dashboard from './dashboard';

const mapStateToProps = state => {
  // map currentUser for side nav profile information
  //make avatar clickable
  return ({
    
  });
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

