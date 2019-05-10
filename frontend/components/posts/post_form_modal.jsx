import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import CreateTextForm from './create_post_forms/create_text_form';
import CreateQuoteForm from './create_post_forms/create_quote_form';
import CreateLinkForm from './create_post_forms/create_link_form';
import CreatePhotoForm from './create_post_forms/create_photo_form';

function PostFormModal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'Create Text':
      component = <CreateTextForm />;
      break;
    case 'Create Photo':
      component = <CreatePhotoForm />;
      break;
    case 'Create Quote':
      component = <CreateQuoteForm />;
      break;
    case 'Create Link':
      component = <CreateLinkForm />;
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
