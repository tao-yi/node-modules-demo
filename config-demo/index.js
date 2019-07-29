const path = require('path');
process.env['NODE_CONFIG_DIR'] = path.join(__dirname, '/config');
console.log(process.env['NODE_CONFIG_DIR']);
// /Users/tao/NodeProjects/npm-modules-demo/config-demo/config
const config = require('config');

// 如果不指定NODE_ENV，则默认是undefined,使用development环境
console.log(process.env['NODE_ENV']);

// 如果指定NODE_ENV=production则会在加载完default.json之后加载production.json
// 并且用production.json中的配置覆盖default.json中的配置
const dbConfig = config.get('Customer.dbConfig');

console.log(dbConfig);
// { host: 'localhost', port: 5984, dbName: 'customers' }

// config.get() will throw an exception for undefined keys to help catch typos and missing values. Use config.has() to test if a configuration value is defined.
if (config.has('optionalFeature.detail')) {
  const detail = config.get('optionalFeature.detail');
  //...
}

// Running in this configuration, the port and dbName elements of dbConfig will come from the default.json file, and the host element will come from the production.json override file.
