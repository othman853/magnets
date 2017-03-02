const not = criteria => subject => !criteria(subject);
const eq = criteria => subject => subject === criteria;
const is = (...criteria) => subject => criteria.includes(subject);
const gt = criteria => subject => subject > criteria;
const gte = criteria => subject => subject >= criteria;


module.exports = { not, eq, is, gt, gte };