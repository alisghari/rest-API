const { User } = require("../models/userSchema");





export const createNewUser = (req, res, next) => {
    const newUser = new User(req.body);
    newUser
        .save()
        .then((user) => res.json(user))
        .catch((err) => res.json(err))
}
export const showAll = function (req, res) {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.json(err));
}
export const findUser = function (req, res) {
    User.findById(req.params.id)
        .then(users => res.json(users))
        .catch(err => res.json(err));
}
export const editUser =  async (req, res) => {
    const { id } = req.params;
    var food = req.body.favoriteFood;
    console.log(food)
    const person = await User.findOne({ _id: id });
    console.log(person)
    await person.updateOne({ favoriteFood: food });
    await person.save();
    res.send(person);
  };
  export const deleteUser = function (req, res, next) {
    const { id } = req.params;
  
    User.findByIdAndRemove({ _id: id }, function (err, data) {
      if (err) return next(err);
      res.json(data);
    });
  };