'use strict';

const base64 = require('base-64');
const { Users } = require('../models');

module.exports = async (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(401).send('Unauthorized!');
  } else {
    let encodedString = req.headers.authorization.split(' ').pop();
    // console.log(encodedString);
    let [username, password] = base64.decode(encodedString).split(':');
    try {
      console.log(username);
      req.user = await Users.authenticateBasic(username, password);
      next();
    } catch (err) {
      next('Invalid Login');
    }
  }
};
