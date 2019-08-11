import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import NavbarDash from './navbar_dash';

const mapStateToProps = state => {
  return ({
  });
};

const mapDispatchToProps = dispatch => ({
  openModal: (altCreatePost) => dispatch(openModal(alCreatePost)),
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavbarDash);

