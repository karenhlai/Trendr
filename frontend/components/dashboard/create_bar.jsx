import React from 'react';
import { connect } from 'react-redux';
import PostFormModal from '../posts/post_form_modal';

class CreateBar extends React.Component {
  render () {
    return (
      <div>
        <PostFormModal />
        {/* using official tumblr icons */}
        <nav className="modal-create-bar">

          <button onClick={() => this.props.openModal('Create Text')}>
            <i className="icon_post_text"></i>
            <br />
            <span className="new_post_label_text">Text</span>
          </button>

          <button onClick={() => this.props.openModal('Create Photo')}>
            <i className="icon_post_photo"></i>
            <br />
            <span className="new_post_label_text">Photo</span>
          </button>

          <button onClick={() => this.props.openModal('Create Quote')}>
            <i className="icon_post_quote"></i>
            <br />
            <span className="new_post_label_text">Quote</span>
          </button>

          <button onClick={() => this.props.openModal('Create Link')}>
            <i className="icon_post_link"></i>
            <br />
            <span className="new_post_label_text">Link</span>
          </button>

          <button>
            <i className="icon_post_chat"></i>
            <br />
            <span className="new_post_label_text">Chat</span>
          </button>

          <button>
            <i className="icon_post_audio"></i>
            <br />
            <span className="new_post_label_text">Audio</span>
          </button>

          <button>
            <i className="icon_post_video"></i>
            <br />
            <span className="new_post_label_text">Video</span>
          </button>
        </nav>
        
      </div>
    )
  }
}



const mapStateToProps = state => {
  return ({
  })
};

const mapDispatchToProps = dispatch => ({
  openModal: (formType) => dispatch(openModal(formType)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateBar)