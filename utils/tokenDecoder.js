const jwt_decode = require("jwt-decode");

const tokenDecoder = async (token) => {
  if (token) {
    return jwt_decode(token);
  }
};

module.exports = { tokenDecoder };
