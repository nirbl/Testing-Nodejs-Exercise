const userModule = require('../models/user');

exports.getAllUsers = async (req, res, next) => {
  //res.send('Get all users route');
  try {
    const users = await userModule.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const user = await userModule.findById(req.params.id);
    if (user) {
      res.status(200).json({
        success: true,
        data: user,
      });
    } else {
      res.status(400).json({
        message: `There is no exist user with id number ${req.params.id}`,
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createNewUser = async (req, res, next) => {
  // res.send('Create new user route');
  const { firstName, lastName, email, mobile } = req.body;
  const fullName = `${firstName} ${lastName}`;
  try {
    const user = await userModule.create({
      /* firstName: req.body.firstName,
      lastName: req.body.lastName, */
      fullName,
      email,
      mobile,
      postRef: [],
    });
    // const newUser = await user.save();
    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateUserById = async (req, res, next) => {
  // res.send('Update a user by id route');
  const { firstName, lastName, email, mobile } = req.body;
  const fullName = `${firstName} ${lastName}`;
  try {
    let updateUser = await userModule.findByIdAndUpdate(req.params.id, {
      fullName: fullName,
      //fullName: firstName + lastName,
      //email: req.body.email,
      email: email,
      mobile: mobile,
    });
    res.status(201).json({
      success: true,
      data: updateUser,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

exports.deleteUserById = async (req, res, next) => {
  //res.send('Delete a user by id route');
  try {
    const removedUser = await userModule.findByIdAndDelete(req.params.id);
    if (removedUser) {
      res.status(200).json({
        success: true,
        data: {
          message: `user with id number ${req.params.id} - was deleted successfully`,
        },
      });
    } else {
      res.status(400).json({
        error: 'The user with id number ${req.params.id} is not exist',
      });
    }
  } catch (error) {
    res.status(500).json({
      message: `error !!  the user with id number ${req.params.id} was not deleted -
       
      ${error.message} `,
    });
    console.log(error);
  }
};
