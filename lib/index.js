const filters = require('./filters');
const magnets = require('./magnets');
const mappers = require('./mappers');

module.exports = Object.assign({}, filters, magnets, mappers);
