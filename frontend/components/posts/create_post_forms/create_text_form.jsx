import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../../actions/post_actions';

class CreateTextForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.post;

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
    this.props.createPost(this.state);
  //   let formData = {
  //     title: this.state.title,
  //     body: this.state.body,
  //     content: "text",
  //     author_id: 123
  //   }

  //  console.log(formData);
  //  this.props.createPost(formData);
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        {/* put a hidden input that submits text for every form */}
          <label>Title</label>
          <input type="text" value={this.state.title} name="title" onChange={this.update("title")} />

          <label>Body</label>
          <input type="text" value={this.state.body} name="body" onChange={this.update("body")} />

          <input type="submit" value="Create Post" />
        </form>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  post: { content: "text", title: "", body: "" }
});

const mapDispatchToProps = (dispatch) => ({
  createPost: (post) => dispatch(createPost(post))   
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTextForm);


