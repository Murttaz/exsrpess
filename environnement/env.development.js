const { resolve }= require('path');
const { readFileSync }= require('fs');

module.exports = {
    port:{
        http:7878,
        https:7979,
    },
    ssl:{
        cert: readFileSync(resolve('ssl', 'dwaps.crt')),
        key: readFileSync(resolve('ssl', 'dwaps.key')),
      }
    };