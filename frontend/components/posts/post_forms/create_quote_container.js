import { connect } from 'react-redux';
import { createPost } from '../../../actions/post_actions';
import { closeModal } from '../../../actions/modal_actions';
import QuoteForm from './quote_form';

const mapStateToProps = (state) => {
  const currentUser = state.entities.users[state.session.id];
  return ({
    currentUser: currentUser,
    post: { content: "quote", title: "", body: "" },
    formType: "Create Quote",
  })
};

const mapDispatchToProps = (dispatch) => ({
  createPost: (post) => dispatch(createPost(post)),
  // otherForm: (
  //   <button onClick={() => dispatch(openModal('Create Quote'))}>
  //     Quote</button>
  // ),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(QuoteForm);