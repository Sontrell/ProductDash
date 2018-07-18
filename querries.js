//var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://lwigwfgffcccdq:d1f957d8eef2cce5f493d3597ac96004b21f831b87d7dff19e5b2c22e7c0d5d4@ec2-107-22-169-45.compute-1.amazonaws.com:5432/dadb3o3rjtl39f';
var db = pgp(connectionString);

// add query functions

module.exports = {
  getAllUsers: getAllUsers,
  getSingleUser: getSingleUser,
  createUser: createUser,
  updateUser: updateUser,
  removeUser: removeUser
};