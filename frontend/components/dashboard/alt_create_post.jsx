import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';

const AltCreatePost = ({openModal}) => {
  return (
    <div>
      <ul>
        <li>
          <button onClick={() => openModal('Create Text')}>
            <i className="icon_post_text"></i>
            <span className="new_post_label_text">Text</span>
          </button>
        </li>
        <li>
          <button onClick={() => openModal('Create Photo')}>
            <i className="icon_post_photo"></i>
            <span className="new_post_label_text">Photo</span>
          </button>
        </li>
        <li>
          <button onClick={() => openModal('Create Quote')}>
            <i className="icon_post_quote"></i>
            <span className="new_post_label_text">Quote</span>
          </button>
        </li>
        <li>
          <button onClick={() => openModal('Create Link')}>
            <i className="icon_post_link"></i>
            <span className="new_post_label_text">Link</span>
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

