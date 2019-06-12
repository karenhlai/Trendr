import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updatePost, deletePost } from '../../../actions/post_actions';
import { closeModal } from '../../../actions/modal_actions';
import LinkForm from './link_form';


const mapStateToProps = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  return ({
    currentUser: currentUser,
    post: posts[postId],
    // posts: state.entities.posts,
    formType: "Edit Post",
  })
};

const mapDispatchToProps = (dispatch) => {
  return {
    updatePost: (post) => dispatch(updatePost(post)),
    deletePost: (id) => dispatch(deletePost(id)),
    closeModal: () => dispatch(closeModal),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LinkForm));