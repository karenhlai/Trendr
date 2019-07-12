import React from 'react';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayPostSettings: false
    }
    this.openPostMenu = this.openPostMenu.bind(this);
    this.closePostMenu = this.closePostMenu.bind(this);
  }

  openPostMenu(e) {
    e.preventDefault();
    this.setState({ displayPostSettings: true }, () => {
      document.addEventListener('click', this.handleClickOutside )
    });
  }

  closePostMenu(e) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ displayPostSettings: false }, () => {
        document.removeEventListener('click', this.closePostMenu )
      });
    }
  }

  postContent(post) {
    const media = this.props.post.medias.length !== 0 ? <img className="post-index-item-media" src={this.props.post.medias[0].mediaUrl} /> : null;
    
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
            <p className="post-index-body">- {this.props.post.body}</p>
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
            <p className="post-index-body">{link}</p>
          </div>
        );
    }
  }

  postSetting(post) {
    switch (post.content) {
      case 'text':
        return (
          <button onClick={() => this.props.openModal('Edit Text', this.props.post.id)}>Edit</button>
        )
      // case 'photo':
      //   return (
      //     <button onClick={() => this.props.openModal('Edit Photo', this.props.post.id)}>Edit</button>
      //   )
      case 'quote':
        return (
          <button onClick={() => this.props.openModal('Edit Text', this.props.post.id)}>Edit</button>
        )
      case 'link':
        return (
          <button onClick={() => this.props.openModal('Edit Text', this.props.post.id)}>Edit</button>
        )
    }
  }

  render() {
    const post = this.props.post;
    const authorAvatar = this.props.user.avatarUrl;
    const authorUsername = this.props.user.username;
    let postSettings;

    // debugger
    if (this.props.currentUser.id === this.props.authorId) {
      postSettings = (
        <div>
        <li>
          <button onClick={this.openPostMenu}>
            <i className="fas fa-cog post-settings"></i>
          </button>
        </li>
        { this.state.displayPostSettings
          ? (
            <div>
            { this.postSetting(post) }
            <button onClick={ () => this.props.deletePost(this.props.post.id)}>Delete</button>
            </div>
          ) :
          (null)
        }
        </div>
      )
    } else {
      postSettings = (
        <li>
            <i className="fas fa-heart post-settings"></i>
        </li>
      )
    };

    return(
      <div className="post-index-item-row">
        <img className="post-author-icon" src={authorAvatar} data-aos='fade-right' />
        <div className="post-index-item" data-aos='fade-left'>
          <h2 className="post-author-username"> Here's a post by: {authorUsername} </h2>

          { this.postContent(post) }
          
          <ul>
            { postSettings }
          </ul>
        </div>
      </div>
    )
  }
};

export default PostIndexItem;
