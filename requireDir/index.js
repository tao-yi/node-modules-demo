const requiredir = require('requiredir');
const imports = require('./routes/');

console.log('Number of imports: ' + imports.length);
console.log(
  'Modules can be accessed as properties to the imports variable: ' +
    imports.myRoutes.name
);
console.log(
  'Modules can also be accessed by Array to access them in order of importing: ' +
    imports.toArray().length
);
