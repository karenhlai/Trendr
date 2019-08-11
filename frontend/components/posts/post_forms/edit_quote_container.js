import { connect } from 'react-redux';
import { updatePost, deletePost } from '../../../actions/post_actions';
import { closeModal } from '../../../actions/modal_actions';
import QuoteForm from './text_form';

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  const postId = ownProps.postId;
  const posts = state.entities.posts;
  const post = posts[postId];
  return ({
    currentUser,
    postId,
    post,
    formType: "Edit Quote",
  })
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: (post) => dispatch(updatePost(post)),
    deletePost: (id) => dispatch(deletePost(id)),
    closeModal: () => dispatch(closeModal),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuoteForm);