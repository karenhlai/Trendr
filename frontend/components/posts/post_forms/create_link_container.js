import { connect } from 'react-redux';
import { createPost } from '../../../actions/post_actions';
import { closeModal } from '../../../actions/modal_actions';
import LinkForm from './link_form';

const mapStateToProps = (state) => {
  const currentUser = state.entities.users[state.session.id];
  return ({
    currentUser: currentUser,
    post: { content: "link", title: "", body: "" },
    formType: "Create Link",
  })
};

const mapDispatchToProps = (dispatch) => ({
  createPost: (post) => dispatch(createPost(post)),
  // otherForm: (
  //   <button onClick={() => dispatch(openModal('Create Link'))}>
  //     Link
  //   </button>
  // ),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(LinkForm);
