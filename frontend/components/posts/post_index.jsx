import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import PostFormModal from './post_form_modal';
import PostIndexItemContainer from './post_index_item_container';
import SampleItem from './sample_item';
import InfiniteScroll from 'react-infinite-scroller';
 
class PostIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts(); 
  }  

  render() {
    if (this.props.posts.length === 0 ) {
      return null;
    }

    let posts = this.props.posts.map(post => {
      let that = this;
      return (
        <PostIndexItemContainer
          key={post.id}
          user={this.props.users[post.author_id]}
          post={post}
          updatePost={this.props.updatePost}
          deletePost={this.props.deletePost}
          // openModal={this.props.openModal}
          likePost={this.props.likePost}
          unlikePost={this.props.unlikePost}
        />
      );
    });

    // let username = this.props.currentUser.username;
    // debugger
    return (
      <div>

      {/* <div className="navbarDash"> */}
        <nav id="navbar-dash">
          {/* <div className="preload-container" style={{backgroundmage: "https://assets.tumblr.com/images/logo/hover-animations/1.png?_v=161861acded461bb6e995593a3bae835&quot" }} >   <img data-img-id="1" src="https://assets.tumblr.com/images/logo/hover-animations/1.png?_v=161861acded461bb6e995593a3bae835" /> </div> */}
            <a href="/"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAiCAYAAABfqvm9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAGnmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTgtMDYtMjBUMTI6MTc6MTgtMDQ6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTgtMDYtMjBUMTI6MTc6MTgtMDQ6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE4LTA2LTIwVDEyOjE3OjE4LTA0OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmM2ZDg3OGQ3LWQ1ZDctNGVlOC04ZWJiLTc2Zjk0NmFjZWQwOCIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmZjMzExOTkxLWM3OTctYzQ0Yy1hYTg1LTUwYTgwYWM2ZTk0MCIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjFlMmUxZDA4LWQ0YzgtNDNkOS04NDU3LTQyMzJkZmIyYTFjNyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MWUyZTFkMDgtZDRjOC00M2Q5LTg0NTctNDIzMmRmYjJhMWM3IiBzdEV2dDp3aGVuPSIyMDE4LTA2LTIwVDEyOjE3OjE4LTA0OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YzZkODc4ZDctZDVkNy00ZWU4LThlYmItNzZmOTQ2YWNlZDA4IiBzdEV2dDp3aGVuPSIyMDE4LTA2LTIwVDEyOjE3OjE4LTA0OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjc0NmIwYTNlLWE4MWEtNzg0OS04OTJlLTBhNjdkNDQ1NjIwMDwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtCi2F0AAAEKSURBVEjH7dU/K8VRGAfwUybKYDWavQFluMIt3sI1KMVgu7wCJUYr+cUogzKI27XZpDAYzCbZTEJ9DH63DPf3t7Nd33rG51Onc87zBIScmsI3vvCOT7+ZzeoJBeC6/lmsC+5ngM064AheY4Jt2akMTqSXEAUcwq38zJcFx/GkOI0icAxb+FAul9jDYVpHOMNywIF4OQ3oRgSTwQNPAnbxjA4ucJ1OmLzc4Tzt6aQ992j3e0ujBb+k8vgqA87FBpv/4ACAjdjgUhVwGG8F4E3VJfVQYhA8Yg0trGATC1ngcc1p080CW7HBsseuBE7HBgNmSjyhSmBvZ+/gJRbYq0msYhtJutyTP3WFjR9nA18dhY0ZsgAAAABJRU5ErkJggg==" /></a>
            <button onClick={() => this.props.logout()}>Logout</button>
        </nav> 


      <div className="dashboard-main">
      <PostFormModal />
            {/* using official tumblr icons */}
          <nav className="modal-create-bar">

            <button onClick={() => this.props.openModal('Create Text')}>
                <i className="icon_post_text"></i>
                <br />
                <span className="new_post_label_text">Text</span>
            </button>

            <button onClick={() => this.props.openModal('Create Photo')}>
                <i className="icon_post_photo"></i>
                <br />
                <span className="new_post_label_text">Photo</span>
            </button>

            <button onClick={() => this.props.openModal('Create Quote')}>
                <i className="icon_post_quote"></i>
                <br />
                <span className="new_post_label_text">Quote</span>
            </button>
            
            <button onClick={() => this.props.openModal('Create Link')}>
                <i className="icon_post_link"></i>
                <br />
                <span className="new_post_label_text">Link</span>
            </button>

            <button>
                <i className="icon_post_chat"></i>
                <br />
                <span className="new_post_label_text">Chat</span>
            </button>

            <button>
                <i className="icon_post_audio"></i>
                <br />
                <span className="new_post_label_text">Audio</span>
            </button>

            <button>
                <i className="icon_post_video"></i>
                <br />
                <span className="new_post_label_text">Video</span>
            </button>
          </nav>

        { posts.reverse() }

      </div>
      </div>
    );
  }
}

export default PostIndex;










{/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
              Modal Test
          </button>

          <div className="modal" id="exampleModal" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Modal title</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p>Modal body text goes here.</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary">Save changes</button>
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div> */}