const User = require("../db/db.js");

exports.addUser = (form) => {
  return User.updateOne(
    { username: form.username },
    { id: form.id, username: form.username, password: form.password, drinks: form.drinks },
    { upsert: true }
  ).exec();
};

exports.getUser = () => {
  return User.find();
};
