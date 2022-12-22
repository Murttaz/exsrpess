const {resolve} = require('path');

function getIndex(req,res){
    res.sendFile(resolve('public', 'index.html'));
}
function getContact(req,res){
    res.sendFile(resolve('public', 'contact.html'));
}
function getServices(req,res){
    res.sendFile(resolve('public', 'services.html'));
}
function getError(req,res){
    res.sendFile(resolve('public', 'page404.html'));
}


module.exports = {
    getIndex,
    getContact,
    getServices,
    getError,
}