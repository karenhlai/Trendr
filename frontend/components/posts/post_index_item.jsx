import React from 'react';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayPostMenu: false
    }
    this.displayPostMenu = this.displayPostMenu.bind(this);
    this.closePostMenu = this.closePostMenu.bind(this);
  }

  displayPostMenu(e) {
    e.preventDefault();
    this.setState({ displayPostMenu: true }, () => {
      document.addEventListener('click', this.closePostMenu)
    });
  }

  closePostMenu(e) {
    if (!this.postMenu.contains(e.target)) {
      this.setState({ displayPostMenu: false }, () => {
        document.removeEventListener('click', this.closePostMenu)
      });
    }
  }

  postContent(post) {
    // const media = this.props.post.medias.length !== 0 ? <img className="post-index-item-media" src={this.props.post.medias[0].mediaUrl} /> : null;
    
    switch (this.props.post.content) {
      case 'text':
        return (
          <div>
            <h2 className="post-index-title">{this.props.post.title}</h2>
            <p className="post-index-body">{this.props.post.body}</p>
          </div>
        );
      case 'photo':
        return (
          <div>
            <h2 className="post-index-title">{this.props.post.title}</h2>
            { media }
            <p className="post-index-body">{this.props.post.body}</p>
          </div>
        );
      case 'quote':
        return (
          <div>
            <h2 className="post-index-title">"{this.props.post.title}"</h2>
            <p className="post-index-body">{this.props.post.body}</p>
          </div>
        );
      case 'link':
        let link;
        if (this.props.post.body.includes("https://")) {
          link = post.body;
        } else {
          link = "http://" + this.props.post.body;
        }

        return (
          <div>
            {/* <h2>"{props.post.title}"</h2> */}
            <p className="post-index-body">link</p>
          </div>
        );
    }
  }

  postSetting(post) {
    switch (post.content) {
      case 'text':
        return (
          <button onClick={() => this.props.openModal('Edit Text', props.post.id)}>Edit</button>
        )
      case 'photo':
        return (
          <button onClick={() => this.props.openModal('Edit Photo', props.post.id)}>Edit</button>
        )
      case 'quote':
        return (
          <button onClick={() => this.props.openModal('Edit Text', props.post.id)}>Edit</button>
        )
      case 'link':
        return (
          <button onClick={() => this.props.openModal('Edit Text', props.post.id)}>Edit</button>
        )
    }
  }

  render() {
    // const media = this.props.post.medias.length !== 0 ? <img className="post-index-item-media" src={this.props.post.medias[0].mediaUrl} /> : null;
    const post = this.props.post;
    const authorAvatar = this.props.user.avatarUrl;
    const authorUsername = this.props.user.username;
    let postControl;
    
    if (this.props.currentUser.id === this.props.authordId) {
      postControl = (
        <li>
          <button onClick={this.displayPostMenu}>
            <i className="fas fa-cog"></i>
          </button>

          {this.state.displayPostMenu
          ? (
            <div ref={(instance) => { this.postMenu = instance }}>
              {this.postSetting(post)}
              <button onClick={ () => this.props.deletePost(props.post.id)}>Delete</button>
            </div>
            ) :
            (null)
          }
        </li>
      )
    } else {
      postControl = (
        <li><i className="fas fa-heart"></i></li>
      )
    };

    return(
      <div className="post-index-item-row">
        <img className="post-author-icon" src={authorAvatar} data-aos='fade-right' />
        <div className="post-index-item" data-aos='fade-left'>
          <h2 className="post-author-username"> Here's a post by: {authorUsername} </h2>

          { this.postContent(post) }
          
          <ul>
            { postControl }
          </ul>
        </div>
      </div>
    )
  }
};

export default PostIndexItem;
