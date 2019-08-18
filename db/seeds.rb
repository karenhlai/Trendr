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
demoUserAvatar = open('https://trendr-prod.s3-us-west-1.amazonaws.com/bulbasaur.png');
demoUser.avatar.attach(io: demoUserAvatar, filename: 'bulbasaur');

karen = User.create(
  username: "karen",
  email: "karen@email.com",
  password: "password"
);
karenAvatar = open('https://trendr-prod.s3-us-west-1.amazonaws.com/cube_cat.jpg');
karen.avatar.attach(io: karenAvatar, filename: 'cube_cat');

sf_landmarks = User.create(
  username: "sf_landmarks", 
  email: "sf_landmarks@email.com", 
  password: "password"
);
sf_landmarksAvatar = open("https://trendr-prod.s3-us-west-1.amazonaws.com/sf_landmarks_icon.jpg");
sf_landmarks.avatar.attach(io: sf_landmarksAvatar, filename: 'sf_landmarks_icon');

otis = User.create(
  username: "otis", 
  email: "otis@otis.otis", 
  password: "password"
);
otisAvatar = open("https://trendr-prod.s3-us-west-1.amazonaws.com/otis.JPG");
otis.avatar.attach(io: otisAvatar, filename: 'otis');

kelly = User.create(
  username: "kelly", 
  email: "kelly@email.com", 
  password: "password"
);
kellyAvatar = open("https://trendr-prod.s3-us-west-1.amazonaws.com/fire_pyramid.png");
kelly.avatar.attach(io: kellyAvatar, filename: 'fire_pyramid');

#Post
post_one = Post.create(
  content: "text", 
  title: "Hello World", 
  body: "Welcome to Trendr!", 
  author_id: demoUser.id
);

post_two = Post.create(
  content: "photo",
  title: "Lands End",
  body: "San Francisco Landmark",
  author_id: sf_landmarks.id
);
post_two_media = open("https://trendr-prod.s3-us-west-1.amazonaws.com/lands_end.jpg");
post_two.medias.attach(io: post_two_media, filename: "lands_end");

post_three = Post.create(
  content: "photo", 
  title: "Painted Ladies", 
  body: "Must visit~", 
  author_id: sf_landmarks.id
);
post_three_media = open("https://trendr-prod.s3-us-west-1.amazonaws.com/painted_ladies.jpeg");
post_three.medias.attach(io: post_three_media, filename: "painted_ladies");

post_four = Post.create(
  content: "text", 
  title: "Hey there, I'm new to this.", 
  body: "Follow me!",
  author_id: karen.id
);

post_five = Post.create(
  content: "photo",
  title: "",
  body: "",
  author_id: demoUser.id
);
post_five_media = open("https://trendr-prod.s3-us-west-1.amazonaws.com/pair_cats.gif");
post_five.medias.attach(io: post_five_media, filename: "pair_cats");

post_six = Post.create(
  content: "quote", 
  title: "Post quote",
  body: "Author",
  author_id: karen.id
);

post_seven = Post.create(
  content: "photo", 
  title: "New puppy",
  body: "", 
  author_id: karen.id
);
post_seven_media = open("https://trendr-prod.s3-us-west-1.amazonaws.com/puppy.gif");
post_seven.medias.attach(io: post_seven_media, filename: "puppy");

post_eight = Post.create(
  content: "link",
  title: "https://github.com/karenhlai/Trendr",
  body: "Interested in how I built this app?",
  author_id: demoUser.id
);

post_nine = Post.create(
  content: "photo",
  title: "Golden Gate",
  body: "",
  author_id: sf_landmarks.id
);
post_nine_media = open("https://trendr-prod.s3-us-west-1.amazonaws.com/golden_gate.jpg");
post_nine.medias.attach(io: post_nine_media, filename: "golden_gate");

post_ten = Post.create(
  content: "photo", 
  title: "", 
  body: "", 
  author_id: otis.id
);
post_ten_media = open("https://trendr-prod.s3-us-west-1.amazonaws.com/whiny_cat.gif"); 
post_ten.medias.attach(io: post_ten_media, filename: 'whiny_cat');

post_eleven = Post.create(
  content: "quote", 
  title: "Hi, I'm a new user, follow me!", 
  body: "", 
  author_id: kelly.id
);

post_twelve = Post.create(
  content: "photo", 
  title: "Carousel at the Pier", 
  body: "", 
  author_id: sf_landmarks.id
);
post_twelve_media = open("https://trendr-prod.s3-us-west-1.amazonaws.com/pier_carousel.jpg"); 
post_twelve.medias.attach(io: post_twelve_media, filename: 'https://trendr-prod.s3-us-west-1.amazonaws.com/pier_carousel.jpg');

post_thirteen = Post.create(
  content: "photo", 
  title: "", 
  body: "", 
  author_id: kelly.id
);
post_thirteen_media = open("https://trendr-prod.s3-us-west-1.amazonaws.com/cartoon.jpg"); 
post_thirteen.medias.attach(io: post_thirteen_media, filename: 'cartoon');

post_fourteen = Post.create(
  content: "photo", 
  title: "", 
  body: "", 
  author_id: sf_landmarks.id
);
post_fourteen_media = open("https://trendr-prod.s3-us-west-1.amazonaws.com/travel_cartoon.png"); 
post_fourteen.medias.attach(io: post_fourteen_media, filename: 'travel_cartoon');

post_fifteen = Post.create(
  content: "photo", 
  title: "", 
  body: "", 
  author_id: kelly.id
);
post_fifteen_media = open("https://trendr-prod.s3-us-west-1.amazonaws.com/birds_cartoon.jpg"); 
post_fifteen.medias.attach(io: post_fifteen_media, filename: 'birds_cartoon');