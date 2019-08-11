import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import NavbarDash from './navbar_dash';

const mapStateToProps = state => {
  return ({
  });
};

const mapDispatchToProps = dispatch => ({
  openModal: (modal) => dispatch(openModal(modal)),
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavbarDash);

