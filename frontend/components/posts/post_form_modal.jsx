import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import CreateTextContainer from './post_forms/create_text_container';
import CreateQuoteContainer from './post_forms/create_quote_container';
import CreateLinkContainer from './post_forms/create_link_container';
import CreatePhotoContainer from './post_forms/create_photo_container';
import EditTextContainer from './post_forms/edit_text_container';

function PostFormModal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  // console.log(modal);
  // console.log(modal.post.id);

  let component;
  switch (modal) {
    case 'Create Text':
      component = <CreateTextContainer />;
      break;
    case 'Create Photo':
      component = <CreatePhotoContainer />;
      break;
    case 'Create Quote':
      component = <CreateQuoteContainer />;
      break;
    case 'Create Link':
      component = <CreateLinkContainer />;
      break;
    case 'Edit Text':
      debugger
      component = <EditTextContainer postId={modal.postId} />;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal,
    currentUser: state.entities.users[state.session.id],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostFormModal);
