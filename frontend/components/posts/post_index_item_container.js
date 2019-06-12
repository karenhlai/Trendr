import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import { fetchPosts, updatePost, deletePost } from '../../actions/post_actions';
import PostIndexItem from './post_index_item';

const mapStateToProps = (state, ownProps) => {
  const post = ownProps.post;
  const currentUser = state.entities.users[state.session.id];
  const authorId = ownProps.post ? ownProps.post.author_id : "";
  // const authorId = ownProps.post.author_id;
  // const author = state.entities.users[authorId];
  return ({
    post: post,
    authorId: authorId,
    currentUser: currentUser,
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    openModal: (modal, postId) => dispatch(openModal(modal, postId)),
    updatePost: (post) => dispatch(updatePost(post)),
    deletePost: (id) => dispatch(deletePost(id)),
    fetchPosts: () => dispatch(fetchPosts()),
  });
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostIndexItem));