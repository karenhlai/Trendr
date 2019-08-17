# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'
User.destroy_all
Post.destroy_all

# User
demoUser = User.create(
  username: "demoUser",
  email: "demoUser@email.com",
  password: "password"
);
demoUserAvatar = open('https://trendr-prod.s3-us-west-1.amazonaws.com/cube_closed.png');
demoUser.avatar.attach(io: demoUserAvatar, filename: 'cube_closed');

karen = User.create(
  username: "karen",
  email: "karen@email.com",
  password: "password"
);
karenAvatar = open('https://trendr-prod.s3-us-west-1.amazonaws.com/cone_open_64.png');
karen.avatar.attach(io: karenAvatar, filename: 'cone_open_64');

userBot = User.create(
  username: "userBot", 
  email: "userBot@bots.net", 
  password: "password"
);
userBotAvatar = open("https://trendr-prod.s3-us-west-1.amazonaws.com/userBot.jpg");
userBot.avatar.attach(io: userBotAvatar, filename: 'userBot');


#Post
post_one = Post.create(
  content: "Text", 
  title: "Hello World", 
  body: "Welcome to Trendr!", 
  author_id: demoUser.id
);

post_two = Post.create(
  content: "Photo",
  title: "Lands End",
  body: "San Francisco Landmark",
  author_id: demoUser.id
);
post_two_media = open("https://trendr-prod.s3-us-west-1.amazonaws.com/lands_end.jpg");
post_two.medias.attach(io: post_two_media, filename: "lands_end");

post_three = Post.create(
  content: "Photo", 
  title: "Stitch Cartoon", 
  body: "", 
  author_id: demoUser.id
);
post_three_media = open("https://trendr-prod.s3-us-west-1.amazonaws.com/stitch_cartoon.jpg");
post_three.medias.attach(io: post_three_media, filename: "stitch_cartoon");

post_four = Post.create(
  content: "Text", 
  title: "Hey there, I'm new to this.", 
  body: "Follow me!",
  author_id: karen.id
);

post_five = Post.create(
  content: "Photo",
  title: "",
  body: "",
  author_id: karen.id
);
post_five_media = open("https://trendr-prod.s3-us-west-1.amazonaws.com/pair_cats.gif");
post_five.medias.attach(io: post_five_media, filename: "pair_cats");

post_six = Post.create(
  content: "Quote", 
  title: "Post quote",
  body: "Author",
  author_id: karen.id
);

post_seven = Post.create(
  content: "Photo", 
  title: "New puppy",
  body: "", 
  author_id: userBot.id
);
post_seven_media = open("https://trendr-prod.s3-us-west-1.amazonaws.com/puppy.gif");
post_seven.medias.attach(io: post_seven_media, filename: "puppy");

post_eight = Post.create(
  content: "Link",
  title: "https://github.com/karenhlai/Trendr",
  body: "Interested in how I built this app?",
  author_id: userBot.id
);

post_nine = Post.create(
  content: "Photo",
  title: "",
  body: "",
  author_id: userBot.id
);
post_nine_media = open("https://trendr-prod.s3-us-west-1.amazonaws.com/animated.gif");
post_nine.medias.attach(io: post_nine_media, filename: "https://trendr-prod.s3-us-west-1.amazonaws.com/animated.gif");