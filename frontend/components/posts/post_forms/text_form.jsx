import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../../actions/post_actions';
import { closeModal } from '../../../actions/modal_actions';

class TextForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: "text", title: "", body: "" };

    // this.state = { title: "", body: "" };
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

// handleChange(e) {
//   this.setState({
//     [e.target.name] : e.target.value
//   });
// }

  update(field) {
    return e => this.setState({ [field]: e.target.value, });
  };

  
  handleSubmit(e) {
    e.preventDefault();
    this.props.createPost(this.state).then(this.props.closeModal);
  }

  render () {
    return (
      <div>
        <div className="form-author">{this.props.currentUser.username}</div>
        <form className="form" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.title} name="title" onChange={this.update("title")} placeholder="Title" />
          <input type="text" value={this.state.body} name="body" onChange={this.update("body")} placeholder="Your Text Here" />
          <input type="submit" value="Create Post" />
          <button onClick={() => this.props.closeModal()}>Close</button>
        </form>
      </div>
    )
  }
};

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
  otherForm: (
    <button onClick={() => dispatch(openModal('Create Text'))}>
      Text
    </button>
  ), 
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(TextForm);


