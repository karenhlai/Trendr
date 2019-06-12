import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import TextForm from './post_forms/text_form';
import QuoteForm from './post_forms/quote_form';
import LinkForm from './post_forms/link_form';
import PhotoForm from './post_forms/photo_form';
import EditTextContainer from './post_forms/edit_text_container';

function PostFormModal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'Create Text':
      component = <TextForm />;
      break;
    case 'Create Photo':
      component = <PhotoForm />;
      break;
    case 'Create Quote':
      component = <QuoteForm />;
      break;
    case 'Create Link':
      component = <LinkForm />;
      break;
    case 'Edit Post':
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
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostFormModal);
