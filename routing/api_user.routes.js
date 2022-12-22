const {resolve} = require('path');
const router= require('express').Router();
const getUsers= require('../controller/apiController')

router.get('/users', getUsers.usersController);

module.exports = router;

