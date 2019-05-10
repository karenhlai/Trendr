require 'open-uri'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all


# User
demoUser = User.create(
  username: "user",
  email: "user@email.com",
  password: "password"
);
demoUserAvatar = open('https://s3-us-west-1.amazonaws.com/tumblr-clone-dev/ikEg2jjH1rvMwKbJ6Qj1QnWd');
demoUser.avatar.attach(io: demoUserAvatar, filename: 'cube_closed');

karen = User.create(
  username: "karen",
  email: "karen@email.com",
  password: "password"
);
karenAvatar = open('https://s3-us-west-1.amazonaws.com/tumblr-clone-dev/s6Mcmp7e1e8pyz6Fz7AiyUZu');
karen.avatar.attach(io: karenAvatar, filename: 'my_actual_cat');

# Post

# post_one = Post.create(

# );
# post_one_media = File.open("");
# post_one.medias.attach(io: post_one_dog, filename: "");


post_three = Post.create(
  content: nil,
  title: "Not my dog",
  body: "But wish it was",
  author_id: 1
);
post_three_media = open("https://s3-us-west-1.amazonaws.com/tumblr-clone-dev/7M8ERvLF2LpVXYodeKHDUNWt");
post_three.medias.attach(io: post_three_media, filename: "puppy");


post_six = Post.create(
content: "text",
  title: "Deck the Halls",
  body:
   "Fa la la la la, la la la la Fa la la la la, la la la la Oh no no Deck the halls with boughs of holly Fa la la la la, la la la la (fa la la la la, la la la la) 'Tis the season to be jolly Fa la la la la, la la la la (fa la la la la, la la la la) Don we now our gay apparel Fa la la la la, la la la la (fa la la la la, la la la la) Troll the ancient Yuletide carol Fa la la la la, la la la la Fa la la la la, la la la la la la Fa la la la la, fa la la la Fa la la la la, la la la la la la Fa la la la la, fa la la la See the blazing yule before us Fa la la la la, la la la la (fa la la la la, la la la la) Strike the harp and join the chorus (Fa la la la la, la la la, fa la la la la, la la la) Follow me in merry measure Fa la la la la, la la la la, fa la la la la, la la la la While I tell of Yuletide treasure (Fa la la la la, la la la la) Fa la la la la, la la la la la la Fa la la la la, fa la la la Fa la la la la, la la la la la la Fa la la la la, fa la la la Fast away, the old year passes Fa la la la la, la la la la (fa la la la la, la la la la) Hail the new, ye lads and lasses (Fa la la, la la la, la la la, la la la, fa la la, la la la, la la la la) Sing we joyous all together, oh Heedless of the wind and weather Fa la la la la, la la la la (hey) Fa la la la la, la la la la la la (oh) Fa la la la la, fa la la la (oh) Oh oh fa la la la la, la la la la la la Fa la la la la, fa la la la Deck the halls with boughs of holly Fa la la la la, la la la la 'Tis the season to be jolly Fa la la la la, la la la la Don we now our gay apparel Fa la la la la, la la la la Troll the ancient Yuletide carol Fa la la la la, la la la la Fa la la la la, la la la la Fa la la la la, la la la la La la la la, la la la la",
  author_id: 1
);


post_nine = Post.create(
content: nil,
  title: "A very busy cat",
  body: "Very, very busy...",
  author_id: 1
);
post_nine_media = open("https://s3-us-west-1.amazonaws.com/tumblr-clone-dev/JdYPv5Qf3aka3vZcxBh8o99G");
post_nine.medias.attach(io: post_nine_media, filename: "very_busy_cat");


post_eleven = Post.create(
content: nil,
  title: "Lands End",
  body: "Visited somewhere new yesterday...",
  author_id: 1
);
post_eleven_media = open("https://s3-us-west-1.amazonaws.com/tumblr-clone-dev/RpTHPLiUcX9pVHWWdeLsYagM");
post_eleven.medias.attach(io: post_eleven_media, filename: "lands_end");


post_thirteen = Post.create(
  content: nil,
  title: "Me last night",
  body: "",
  author_id: 1
)
post_thirteen_media = open("https://s3-us-west-1.amazonaws.com/tumblr-clone-dev/8qyGiudgrro6dk2gkhWnxcCP");
post_thirteen.medias.attach(io: post_thirteen_media, filename: "me_last_night");


post_fourteen = Post.create(
  content: nil,
  title: "",
  body: "",
  author_id: 1
);
post_fourteen_media = open("https://s3-us-west-1.amazonaws.com/tumblr-clone-dev/acCzgvajZSp74uZ2zyMnF2AG");
post_fourteen.medias.attach(io: post_fourteen_media, filename: "tumblr_pic");

post_fiftheen = Post.create(
  content: nil,
  title: "My Goals",
  body: "Must complete",
  author_id: 2
);
post_fiftheen_media = open("https://s3-us-west-1.amazonaws.com/tumblr-clone-dev/1c1QzA527RgUhiphm3GzdpVk");
post_fiftheen.medias.attach(io: post_fiftheen_media, filename: "todo_list");

post_sixteen = Post.create(
  content: "text",
  title: "To-Do List",
  body: "Nothing, absolutely nothing \u{1F974}",
  author_id: 2
);


post_seventeen = Post.create(
  content: nil,
  title: "",
  body: "",
  author_id: 1
);
post_seventeen_media = open("https://s3-us-west-1.amazonaws.com/tumblr-clone-dev/iM9mA3Rn3mUo3QTjs5dKPZxm");
post_seventeen.medias.attach(io: post_seventeen_media, filename: "pair_cats");