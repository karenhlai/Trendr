import { connect } from 'react-redux';
import { createPost } from '../../../actions/post_actions';
import { closeModal } from '../../../actions/modal_actions';
import TextForm from './text_form';

const mapStateToProps = (state) => {
  const currentUser = state.entities.users[state.session.id];
  return ({
    currentUser: currentUser,
    post: { content: "text", title: "", body: "" },
    formType: "Create Text",
  })
};

const mapDispatchToProps = (dispatch) => ({
  createPost: (post) => dispatch(createPost(post)),
  // otherForm: (
  //   <button onClick={() => dispatch(openModal('Create Text'))}>
  //     Text
  //   </button>
  // ),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(TextForm);