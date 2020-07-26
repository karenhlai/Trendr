import React from 'react';
import M from 'materialize-css/dist/js/materialize.js';
import SideProfileContainer from '../sidenav/side_profile_container';
// import DefaultAvatar from '../../../app/assets/images/cube_closed.png';

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
        let linkTitle;
        if (this.props.post.title.includes("https://")) {
          linkTitle = post.title;
        } else {
          linkTitle = `http://${post.title}`;
        }
        
        let linkBody = post.body;
        return (
          <div>
            <h2 className="post-index-title">
              <a href={linkTitle}> 
              {linkTitle}
              </a>
            </h2>
            <p className="post-index-body">{linkBody}</p>
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
    let authorUsername;
    // debugger
    if (!this.props.user) {
      authorUsername = "guest"
      // console.log("no user")
      // console.log(this.props)
      return null;
    } else {
      // console.log(this.props.user.username)
      authorUsername = this.props.user.username;
    };

    // debugger
    let authorAvatar;
    let postSettings;
    
    if (!this.props.user.avatarUrl) {
      // authorAvatar = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRodU8a0j7tQxFglkdkS6JYVX4o3IXl92YWHYW4wvqg2WvAYSVE";
      authorAvatar = 'https://trendr-prod.s3-us-west-1.amazonaws.com/cube_closed.png';
    } else {
      authorAvatar = this.props.user.avatarUrl;
    };

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
                  <ul><button onClick={() => this.props.postDeleteHandler(post.id)}>Delete</button></ul>
                  {/* <ul><button onClick={() => this.props.deletePost(post.id)}>Delete</button></ul> */}
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
        {/* <SideProfileContainer targetUser={post.user} /> */}
        {/* <a href="#" data-target="slide-out" className="sidenav-trigger"> */}
          <img
            className="post-author-icon"
            src={authorAvatar}
            data-aos="fade-right"
          />
        {/* </a> */}

        <div className="post-index-item" data-aos="fade-up">
          <h2 className="post-author-username">
            { authorUsername }
            {/* use "here's a blog" for user they are not following */}
          </h2>
          {this.postContent(post)}

          <ul>{postSettings}</ul>
        </div>
        
      </div>
    );
  }
};

export default PostIndexItem;
