<h2>Trendr - A Tumblr Clone</h2>

<a href="https://the-trendr-app.herokuapp.com">Live Demo!</a>

<h2>Background and Overview</h2>
Trendr is a platform suitable for anyone who likes to express their creativity through blogging. Backed by Rails and PostGresSQL, and implementing Amazon Web Services (AWS) to easily store media on the cloud, Trendr operates with React.js and Redux tools on the front-end. This application is currently in the works, anything viable as of now was built within a 10-day time frame. Potential features may be added and updated in the future.

<h2>Functionality and Features</h2>

- Standard User Authentication utilizing Rails encryption pattern and BCrypt methods
- Users can create, edit, and delete posts that include types: text, quote, link, photo
- Users are able to like posts, and access their like feed
- Users are able to follow other users, and access their follows page

<h2>Implementation Methods and Technologies</h2>
  Backend: Rails
  <br />
  Frontend: React.js, Redux
  
- Building and implementing a thorough database scheme with Rails backend Routes to store users, posts, likes, and follows
- Integrating full CRUD functionality, allowing users to create, update, and delete posts on their dashboard
- Organizing Landing, Dashboard Index, Sign Up, Sign In, Create / Edit Post components with React and Redux 

<h2>Code Highlights</h2>
<h3>Adding file uploads to ajax requests </h3>

```javascript
/frontend/util/post_api_util.js

export const createPost = (post) => {
  const request = {
    method: 'post',
    url: 'api/posts', 
    data: {post},
  }

  if (post.getAll) {
    request.data = post; 
    request.contentType = false;
    request.processData = false;
  }

  return $.ajax(request);
};
```
Adding photo data in ajax reqeusts proved to be an initial challenge. While able to pass in destructured post data to the request when createPost did not involve photo uploads, this did not work when our event handlers invovled media(photo) data. Hence, I invovled a conditional check to pass in post data (not wrapped with {}) to populate the reqeust with the media as well.

<!-- place a code snippet here -->

<h2>UI/UX</h2>
The goal is to pixel perfectly replicate Tumblr's website

- The landing page, where users will sign up or sign in, will showcase majority of this app's animation implementation. It will contain section scrolling, and navigation buttons that will direct user to a specific section upon clicking. A user can sign in or sign up on the first or last sections.

<!-- place splash animation here -->
![trendr_gif](app/assets/images/trendr_gif.gif)

- Upon signing in or signing up, the user's dashboard will render with posts created by themselves, other users they are following, as well as recommended posts. Posts will render according based on chronological order, starting with the newest post on top.

<!-- place dashboard animation here -->
![trendr_gif](app/assets/images/trendr-dashboard.gif)


- Upon clicking on the create post mavigatoin bar, an appropiate modal form will render based on the type of action the user has chosen, i.e. a 'create text' modal will differ from the 'create photo' modal.

<!-- place animation of photo upload here -->
![trendr_gif](app/assets/images/trendr-photo-upload.gif)


<h3>Bonus Features:</h3>

- Users can create posts that include types: audio, video
- Users can chat with other users through the chat feature
- Users can reblog other user's posts
- Users can explore posts through tag search