const cloudinary = require("cloudinary").v2;
require("dotenv").config();

cloudinary.config({
  cloud_name: "webevistech",
  api_key: "684598517524145",
  api_secret: "2Mv2r5-bsNoniOZLMSZjrWq2i4o",
});

module.exports = cloudinary;
