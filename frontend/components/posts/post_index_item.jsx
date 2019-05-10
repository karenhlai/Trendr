import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const PostIndexItem = (props) => {
  // debugger
  const media = props.post.medias.length !== 0 ? <img className="post-index-item-media" src={props.post.medias[0].mediaUrl} /> : null;
  // debugger
  return (
    <div>
      <div className="post-index-item-row">
        <img className="post-author-icon" src={props.user.avatarUrl} data-aos='fade-right'/>
        <div className="post-index-item" data-aos='fade-left'>
        <h2 className="post-author-username"> Here's a post by: { props.user.username } </h2>
      <h2 className="post-index-title">{props.post.title}</h2>
          <center> {media} </center>
      <p className="post-index-body">{props.post.body}</p>
      {/* render an image if there is one, set source to the photo url */}
      
      <button onClick={ () => props.updatePost(props.post.id)}>
            <img className="edit" src="https://cdn3.iconfinder.com/data/icons/block/32/box_edit-512.png" />
      </button>


      <button onClick={ () => props.deletePost(props.post.id)}>
          <img className="trash" src="https://cdn1.iconfinder.com/data/icons/device-apps-settings/2048/Recycle_bin-512.png" />
      </button>
      </div>
    </div>

    </div>

  )
};


export default PostIndexItem;