const express = require('express');
const usersControllers = require('../controllers/usersController');
const router = express.Router();

// ==> /users
router
  .route('/')
  .get(usersControllers.getAllUsers)
  .post(usersControllers.createNewUser);

// ==> /users/someid
//.get(usersControllers.getUser)
router
  .route('/:id')
  .get(usersControllers.getUser)
  .put(usersControllers.updateUserById)
  .delete(usersControllers.deleteUserById);

module.exports = router;
