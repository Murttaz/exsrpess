const router = require('express').Router();
const { resolve }= require('path');
const controller= require('../controller/controller')
router.get('/home', controller.getIndex
);

router.get('/services', controller.getServices
);

router.get('/contact', controller.getContact);

router.get('*', (controller.getError))

module.exports = router;