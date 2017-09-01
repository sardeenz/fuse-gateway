const path = require('path');
const gateway = require('express-gateway');
var environment = process.env.NODE_ENV;
console.log('environment = ', environment);

gateway()
    .load(path.join(__dirname, 'config'))
    .run();