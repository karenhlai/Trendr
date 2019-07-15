import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { openModal } from '../../actions/modal_actions';
import { fetchPosts, updatePost, deletePost } from '../../actions/post_actions';
import PostIndexItem from './post_index_item';

const mapStateToProps = (state, ownProps) => {
  const post = ownProps.post;
  const currentUser = state.entities.users[state.session.id];
  const authorId = ownProps.post ? ownProps.post.author_id : "";
  // const media = ownProps.post.medias[0];
  // debugger
  return ({
    post: post,
    authorId: authorId,
    currentUser: currentUser,
    // media: media
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    openModal: (modal, postId) => dispatch(openModal(modal, postId)),
    updatePost: (post) => dispatch(updatePost(post)),
    deletePost: (id) => dispatch(deletePost(id)),
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(PostIndexItem);