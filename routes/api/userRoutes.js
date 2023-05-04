const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/userController');

// Set up GET all and POST at /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// Set up GET one, PUT, and DELETE at /api/users/:userId
router
    .route('/:userId')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// Set up POST and DELETE at /api/users/:userId/friends/:friendId
router
    .route('/:userId/friends')
    .post(addFriend)

router
    .route('/:userId/friends/:friendId')
    .delete(removeFriend);

module.exports = router;
