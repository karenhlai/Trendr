import React from 'react';
import withRouter from 'react-router';

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);
    // this.state = this.props.post;
    this.state = { content: "photo", title: "", body: "" };
    
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value, });
  };

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ mediaFile: file, photoUrl: fileReader.result });
    }

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('post[content]', this.state.content);
    formData.append('post[title]', this.state.title);
    formData.append('post[body]', this.state.body);
    
    if (this.state.mediaFile) {
      formData.append('post[medias]', this.state.mediaFile);
    }
    
    this.props.createPost(formData).then(this.props.closeModal);    
  }


  render() {
    // console.log(this.state);
    const preview = this.state.mediaUrl ? <img src={this.state.mediaUrl} /> : null;
    return (
      <div>
        <div className="form-author">{this.props.currentUser.username}</div>
        <form className="form" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.title} name="title" onChange={this.update("title")} placeholder={"Title your Pic"} />
          <input type="text" value={this.state.body} name="body" onChange={this.update("body")} placeholder={"Add a caption"} />
          <br />
          <input type="file" onChange={this.handleFile} />
          {/* <h3>Image Preview</h3>  */}
          {/* { preview } */}
          <br />
          <input type="submit" value="Post Photo" />
          <button onClick={() => this.props.closeModal()}>Close</button>
        </form>
      </div>
    )
  }
};

export default PhotoForm;
