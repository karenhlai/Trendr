import React from 'react';
import { connect } from 'react-redux';
import PostFormModal from '../posts/post_form_modal';

class CreateBar extends React.Component {
  render () {
    let currentUserAvatar = this.props.currentUser.avatarUrl;
    return (
      <div className="modal-create-bar-container">
        <img src={currentUserAvatar} />
        <PostFormModal />
        {/* using official tumblr icons */}
        <nav className="modal-create-bar">
          <button onClick={() => this.props.openModal('Create Text')}>
            <i className="icon_post_text"></i>
            <span className="new_post_label_text">Text</span>
          </button>

          <button onClick={() => this.props.openModal('Create Photo')}>
            <i className="icon_post_photo"></i>
            <span className="new_post_label_text">Photo</span>
          </button>

          <button onClick={() => this.props.openModal('Create Quote')}>
            <i className="icon_post_quote"></i>
            <span className="new_post_label_text">Quote</span>
          </button>

          <button onClick={() => this.props.openModal('Create Link')}>
            <i className="icon_post_link"></i>
            <span className="new_post_label_text">Link</span>
          </button>

          <button>
            <i className="icon_post_chat"></i>
            <span className="new_post_label_text">Chat</span>
          </button>

          <button>
            <i className="icon_post_audio"></i>
            <span className="new_post_label_text">Audio</span>
          </button>

          <button>
            <i className="icon_post_video"></i>
            <span className="new_post_label_text">Video</span>
          </button>
        </nav>
        
      </div>
    )
  }
}



const mapStateToProps = state => {
  const currentUser = state.entities.users[state.session.id];
  return ({
    currentUser
  })
};

const mapDispatchToProps = dispatch => ({
  openModal: (formType) => dispatch(openModal(formType)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateBar)