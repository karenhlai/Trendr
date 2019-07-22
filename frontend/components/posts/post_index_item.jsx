import React from 'react';
import M from 'materialize-css/dist/js/materialize.js';
// import 'materialize-css/dist/css/materialize.min.css';

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
    // document.addEventListener('DOMContentLoaded', () => {
    //   let elem = document.querySelectorAll('.sidenav');
    //   let instances = M.Sidenav.init(elems, options);
    // });
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
    // if (!this.dropdownSettings.contains(e.target)) {
      this.setState({ displayPostSettings: false }, () => {
        document.removeEventListener('click', this.closePostMenu )
      });
    // } 
  }

  postContent(post) {
    const media = this.props.post.medias.length !== 0 ? 
    <img className="post-index-item-media" src={this.props.post.medias[0].mediaUrl} /> 
      : null;
    
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
        let linkStr;
        // if (this.props.post.title.includes("https://")) {
          linkStr = this.props.post.title;
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

  postSetting(post) {
    switch (post.content) {
      case 'text':
        return (
          <button onClick={() => this.props.openModal('Edit Text', post.id)}>Edit</button>
        )
      case 'photo':
        return (
          <button onClick={() => this.props.openModal('Edit Photo', this.props.post.id)}>Edit</button>
        )
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
    const currentUser = this.props.currentUser;
    const authorAvatar = this.props.user.avatarUrl;
    const authorUsername = this.props.user.username;
    let postSettings;
    let likeButton;

      if (!post.likes.includes(currentUser.id) ) {
        likeButton = (
          <button onClick={() => this.props.likePost(post.id, currentUser.id)}>
            <i className="fas fa-heart post-settings"></i>
          </button>
        );
      } else if (post.likes.includes(currentUser.id)) {
        likeButton = (
          <button onClick={() => this.props.unlikePost(post.id)}>
            <i className="fas fa-heart post-settings-unlike"></i>
            { post.likes }
          </button>
        );
      }
  //error once I try to like a post I've already liked, I keep receiving 422 error msg when I try to like posts I haven't yet liked
  //does not get this error I like posts I haven't liked at all, I can like multiple posts 
    //fix reducers to actually remove currnetUser's id
    //fix views to get user_id into array, and not the id of the like 

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
                  <ul>{this.postSetting(post)}</ul>
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

    return(
      <div className="post-index-item-row">
        <a href="#" data-target="slide-out" className="sidenav-trigger">
          <img className="post-author-icon" src={authorAvatar} data-aos='fade-right' />
        </a>

        <ul id="slide-out" className="sidenav">
          <li><div className="user-view">
            <div className="background">
            </div>
                <a href="#name"><span className="white-text name">John Doe</span></a>
                <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
          </div></li>
            <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
            <li><a href="#!">Second Link</a></li>
            <li><div className="divider"></div></li>
            <li><a className="subheader">Subheader</a></li>
            <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
            <li><a className="sidenav-close" href="#!">Clicking this will close Sidenav</a></li>
        </ul>
        
        <div className="post-index-item" data-aos='fade-left'>
          <h2 className="post-author-username"> Here's a blog: <b>{authorUsername}</b> </h2>

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
