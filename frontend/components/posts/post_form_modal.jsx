import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import CreateTextContainer from './post_forms/create_text_container';
import CreateQuoteContainer from './post_forms/create_quote_container';
import CreateLinkContainer from './post_forms/create_link_container';
import CreatePhotoContainer from './post_forms/create_photo_container';
import EditTextContainer from './post_forms/edit_text_container';
import EditQuoteContainer from './post_forms/edit_quote_container';
import AltCreatePost from '../dashboard/alt_create_post';

function PostFormModal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  // console.log(modal);
  // console.log(modal.post.id);

  let component;
  switch (modal.modal) {
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
      component = <EditTextContainer postId={modal.postId} />;
      break;
    // case 'Edit Photo':
    //   component = <EditPhotoContainer postId={modal.postId} />;
    //   break;
    case 'Edit Quote':
      component = <EditQuoteContainer postId={modal.postId} />;
      break;
    case 'Edit Link':
      component = <EditLinkContainer postId={modal.postId} />;
      break;
    case 'AltCreatePost':
      component = <AltCreatePost /> 
      //may want to create seperate return state to divert from initial modal styling classNames
      return (
        <div className="modal-background" onClick={() => closeModal()}>
          <div className="alt-modal-child" onClick={e => e.stopPropagation()}>
            {component}
          </div>
        </div>
      );
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
