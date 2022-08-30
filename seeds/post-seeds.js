const { Post } = require("../models");

const postdata = [
  {
    title: "Donec posuere metus vitae ipsum.",
    blog_text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Cum sociis natoque penatibus et justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et justo. Lorem ipsum dolor sit amet",
    user_id: 10,
  },
  {
    title: "Morbi non quam nec dui luctus rutrum.",
    blog_text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Cum sociis natoque penatibus et justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et justo. Lorem ipsum dolor sit amet",
    user_id: 8,
  },
  {
    title: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    blog_text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Cum sociis natoque penatibus et justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et justo. Lorem ipsum dolor sit amet",
    user_id: 1,
  },
  {
    title: "Nunc purus.",
    blog_text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Cum sociis natoque penatibus et justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et justo. Lorem ipsum dolor sit amet",
    user_id: 4,
  },
  {
    title: "Pellentesque eget nunc.",
    blog_text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et justo. Lorem ipsum dolor sit amet",
    user_id: 7,
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    blog_text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et justo. Lorem ipsum dolor sit amet",
    user_id: 4,
  },
  {
    title: "In hac habitasse platea dictumst.",
    blog_text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et justo. Lorem ipsum dolor sit amet",
    user_id: 1,
  },
  {
    title: "Morbi non quam nec dui luctus rutrum.",
    blog_text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et justo. Lorem ipsum dolor sit amet",
    user_id: 1,
  },
  {
    title: "Duis ac nibh.",
    blog_text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et justo. Lorem ipsum dolor sit amet",
    user_id: 9,
  },
  {
    title: "Curabitur at ipsum ac tellus semper interdum.",
    blog_text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et justo. Lorem ipsum dolor sit amet",
    user_id: 5,
  },
  {
    title: "In hac habitasse platea dictumst.",
    blog_text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et justo. Lorem ipsum dolor sit amet",
    user_id: 3,
  },
  {
    title: "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
    blog_text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et justo. Lorem ipsum dolor sit amet",
    user_id: 10,
  },
  {
    title: "Donec dapibus.",
    blog_text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et justo. Lorem ipsum dolor sit amet",
    user_id: 8,
  },
  {
    title: "Nulla tellus.",
    blog_text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et justo. Lorem ipsum dolor sit amet",
    user_id: 3,
  },
  {
    title: "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    blog_text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et justo. Lorem ipsum dolor sit amet",
    user_id: 3,
  },
  {
    title:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    blog_text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et justo. Lorem ipsum dolor sit amet",
    user_id: 7,
  },
  {
    title: "In hac habitasse platea dictumst.",
    blog_text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et justo. Lorem ipsum dolor sit amet",
    user_id: 11,
  },
  {
    title: "Etiam justo.",
    blog_text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et justo. Lorem ipsum dolor sit amet",
    user_id: 4,
  },
  {
    title: "Nulla ut erat id mauris vulputate elementum.",
    blog_text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et justo. Lorem ipsum dolor sit amet",
    user_id: 6,
  },
  {
    title: "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    blog_text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et justo. Lorem ipsum dolor sit amet",
    user_id: 11,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
