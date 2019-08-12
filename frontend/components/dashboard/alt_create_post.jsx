import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';

const AltCreatePost = ({openModal}) => {
  return (
    <div>
      <ul className="alt-create-bar">
        <li>
          <button onClick={() => openModal('Create Text')}>
            <i className="alt-bar icon_post_text"></i>
            <span className="alt_new_post_label_text">Text</span>
          </button>
        </li>
        <li>
          <button onClick={() => openModal('Create Photo')}>
            <i className="alt-bar icon_post_photo"></i>
            <span className="alt_new_post_label_text">Photo</span>
          </button>
        </li>
        <li>
          <button onClick={() => openModal('Create Link')}>
            <i className="alt-bar icon_post_link"></i>
            <span className="alt_new_post_label_text">Link</span>
          </button>
        </li>
        <li>
          <button onClick={() => openModal('Create Quote')}>
            <i className="alt-bar icon_post_quote"></i>
            <span className="alt_new_post_label_text">Quote</span>
          </button>
        </li>
      </ul>
    </div>
  );
};



const mapStateToProps = (state) => {
  return ({
  });
};

const mapDispatchToProps = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(AltCreatePost);

