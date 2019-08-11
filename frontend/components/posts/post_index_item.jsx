import React from 'react';
import M from 'materialize-css/dist/js/materialize.js';
import SideProfile from '../sidenav/side_profile';
import SideProfileContainer from '../sidenav/side_profile_container';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayPostSettings: false
    };
    this.openPostMenu = this.openPostMenu.bind(this);
    this.closePostMenu = this.closePostMenu.bind(this);
  }

  componentDidMount() {
    M.AutoInit();
  };

  openPostMenu(e) {
    e.preventDefault();
    this.setState({ displayPostSettings: true }, () => {
      document.addEventListener('click', this.closePostMenu )
    });
  }

  //check if the origin of the event was from within the menu itself 
  //-- only if it isn't do we set state and remove the event handler from document
  closePostMenu(e) {
    if (!this.dropdownSettings.contains(e.target)) {
      this.setState({ displayPostSettings: false }, () => {
        document.removeEventListener('click', this.closePostMenu )
      });
    } 
  }

  postContent(post) {
    const media = this.props.post.medias.length !== 0 ? 
    <img className="post-index-item-media" src={this.props.post.medias[0].mediaUrl} /> 
      : null;
    
    switch (post.content) {
      case 'text':
        return (
          <div>
            <h2 className="post-index-title">{post.title}</h2>
            <p className="post-index-body">{post.body}</p>
          </div>
        );
      case 'photo':
        return (
          <div>
            <h2 className="post-index-title">{post.title}</h2>
            { media }
            <p className="post-index-body">{post.body}</p>
          </div>
        );
      case 'quote':
        return (
          <div>
            <h2 className="post-index-title">"{post.title}"</h2>
            <p className="post-index-body">- {post.body}</p>
          </div>
        );
      case 'link':
        let linkStr;
        // if (this.props.post.title.includes("https://")) {
          linkStr = post.title;
        // } else {
          // linkStr = `http://${this.props.post.title}`;
        // }

        return (
          <div>
            <a href={linkStr}>
              <p className="post-index-body">{linkStr}</p>
            </a>
          </div>
        );
    }
  }

  postEditOptions(post) {
    switch (post.content) {
      case 'text':
        return (
          <button onClick={() => this.props.openModal('Edit Text', post.id)}>Edit</button>
        )
      case 'photo':
        return (
          <button onClick={() => this.props.openModal('Edit Photo', post.id)}>Edit</button>
        )
      case 'quote':
        return (
          <button onClick={() => this.props.openModal('Edit Text', post.id)}>Edit</button>
        )
      case 'link':
        return (
          <button onClick={() => this.props.openModal('Edit Text', post.id)}>Edit</button>
        )
    }
  }


  render() {
    const post = this.props.post;
    const currentUser = this.props.currentUser;
    const authorAvatar = this.props.user.avatarUrl;
    const authorUsername = this.props.user.username;
    let postSettings;
    
    let likeButton = this.props.post.likes;
    if (this.props.postLikes.indexOf(currentUser.id) === -1) {
      likeButton = (
        <button onClick={() => this.props.likePost(post.id, currentUser.id)}>
          <i className="fas fa-heart post-settings post-settings-unliked"></i>
        </button>
      );
    } else {
      likeButton = (
        <button onClick={() => this.props.unlikePost(post.id)}>
          <i className="fas fa-heart post-settings-liked"></i>
        </button>
      );
    };
    // debugger
    if (this.props.currentUser.id === this.props.authorId) {
      postSettings = (
        <div>
          <li>
            <button onClick={this.openPostMenu}>
              <i className="fas fa-cog post-settings"></i>
            </button>
          </li>

            { 
              this.state.displayPostSettings
              ? (
                //check if origin of out click event is from an element that the dropdown menu contains
                //reference to the dropdown menu, ref property to get a reference to the DOM element
              <li className="post-settings" ref={(element) => { this.dropdownSettings = element }}>
                  <ul>{this.postEditOptions(post)}</ul>
                  <ul><button onClick={() => this.props.deletePost(post.id)}>Delete</button></ul>
              </li>
                ) : (
                null
              )
            }
        </div>
      )
    } else {
      postSettings = (
        <div>
          { likeButton }
        </div>
      )
    };
    return (
      <div className="post-index-item-row">
        {/* sideprofile */}
        <SideProfile targetUser={post.user} />
        <a href="#" data-target="slide-out" className="sidenav-trigger">
          <img
            className="post-author-icon"
            src={authorAvatar}
            data-aos="fade-right"
          />
        </a>

        <div className="post-index-item" data-aos="fade-left">
          <h2 className="post-author-username">
            Here's a blog: <b>{authorUsername}</b>
            {/* use "here's a blog" for user that you're not following */}
          </h2>
          {this.postContent(post)}

          <ul>{postSettings}</ul>
        </div>
        
      </div>
    );
  }
};

export default PostIndexItem;
