import React from 'react';
import { connect } from 'react-redux';
import { fetchOwnPosts, updatePost } from '../../../actions/post_actions';
import { closeModal } from '../../../actions/modal_actions';

class EditPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.post;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState = ({ content: this.props.content, title: this.props.title, body: this.props.body });
  }

  componentWillUnmount() {
    this.props.closeModal();
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const post = Object.assign({}, this.state);
    this.props.updatePost(post).then(this.props.closeModal);
  };

  render() {
    return (
      <div className="delete-form-modal">

        <h1>Edit Post</h1>
        <form className="form" onSubmit={this.handleSubmit}>
            <input type="text" name="title" value={this.state.title} onChange={this.update("title")} placeholder="Title" />
            <input type="text" value={this.state.body} name="body" onChange={this.update("body")} placeholder="Your Text Here" />
            <input type="submit" value="Create Post" />
            <button onClick={() => this.props.closeModal()}>Close</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.entities.posts,
    formType: "Edit Post",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOwnPosts: (id) => dispatch(fetchOwnPosts(id)),
    updatePost: (post) => dispatch(updatePost(post)),
    closeModal: () => dispatch(closeModal),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPost);