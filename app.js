const express = require('express');
const app = express();
const { resolve }= require('path');
const router = require('./routing/router')
const routerApi = require('./routing/api_user.routes')

app.use(express.static(resolve('public'),{index:false}));

app.use(routerApi);
app.use(router);


module.exports = app;