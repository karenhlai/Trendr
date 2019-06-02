<h2>Trendr - A Tumblr Clone</h2>

Live Demo!

<h3>Background and Overview</h3>
Trendr is a social blogging application platform suitable for anyone who likes to express their creativity through text, photos, videos, and music. Implementing Amazon Web Services (AWS) to easily store media on the cloud, and backed by Rails and PostGresSQL, Trendr operates with the popular ReactJS and Redux tools on the front-end. This application is currently in the works, anything viable as of now was built within a 10-day time frame. Bonus features such as video and audio upload are currently in the works!

<h3>Features</h3>
- Standard User Authentication utilizing session tokens and BCrypt encryption
- Users are assigned an avatar, but can upload and set their own unique avatar
- Users can create posts that include types: text, link, photo 
- Existing posts can be deleted by its owner

Bonus Features coming soon!
- Users can create posts that include types: audio, video
- Users can chat with other users through the chat feature
- Existing posts can be edited by its owner
- Users can reblog other user's posts
- Related posts can render on user's dashboard 
- Users can explore posts through tag search

<h3>Functionality and MVPs</h3>
- User Auth
  - Existing users can sign in, new users can sign up
- Posts
  - Signed in users can create, edit, and delete posts via their Dashboard
- Likes
  - Users can like other users posts, as well as their own!

<h3>Implementation Methods and Technologies</h3>
  Backend: Rails
  Frontend: React, Redux

- Building and implementing a thorough database scheme with Rails backend Routes to store users, and posts
- Integrating full CRUD functionality, allowing users to create, update, and delete posts on their dashboard
- Organizing Landing, Dashboard Index, Sign Up, Sign In, Create / Edit Post components with React and Redux 

<h3>Code Highlights</h3>

<h3>UI/UX</h3>
The goal is to pixel perfectly replicate Tumblr's website

- The landing page, where users will sign up or sign in, will showcase majority of this app's design implementation - animation and functionality wise. It will contain section scrolling, and navigation buttons that will direct user to a specific section upon clicking. A user can sign in or sign up on the first or last sections.
- Upon signing in or signing up, the user's dashboard will render with posts created by themselves, other users they are following, as well as recommended posts(coming soon!). Posts will render according based on chronological order, starting with the newest post on top. Only 8 posts will render at a time, meaning when users have scrolled past 75% of post content, another 8 posts will render following the current 8 posts. 
- Upon creating or editing a post, an appropiate modal will render based on the type of action the user has chosen, i.e. a 'create text' modal will differ from the 'create photo' modal.


Self notes for README completion: 
- Update functionality (based upon stuff I've completed thus far)
- Integrate tech tools used under Implentation Methods and Tech section
- Provide code snippets in Code Highlights (gif screenshot)
- 
