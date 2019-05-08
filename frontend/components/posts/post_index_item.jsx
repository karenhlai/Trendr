import React from 'react';
// import edit modal here
// import edit modal for media content here
// import avatar here

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: this.props.posts,
    };

    this.mountTitle = this.mountTitle.bind(this);
    this.mountBody = this.mountBody.bind(this);
    this.textModal = this.textModal.bind(this);
    this.editForms = this.editForms.bind(this); //editTextForm and editContentForm will render here
  }

  

  componentWillReceiveProps(nextProps) {
    if (nextProps.nextProps.post !== this.props.nextProps.post) {
      this.setState({ post: nextProps.post });
    }
  }


  render () {


    return (
      <div>
  
      </div>
    )
  }
}

export default PostIndexItem;