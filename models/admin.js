const mongoose = require("mongoose");
const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const AdminSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, "Please Enter Email"],
            unique: true,
        },
        password: {
            type: String,
            required: [true, "Please Enter Password"],
        },
    },
    {
        timestamps: true,
    }
);
AdminSchema.pre("save", async function (next) {
    const salt = await bycrypt.genSalt(10);
    this.password = await bycrypt.hash(this.password, salt);
    next();
});
AdminSchema.methods.checkPassword = async function (password) {
    const isMatch = await bycrypt.compare(password, this.password);
    return isMatch;
};
AdminSchema.methods.generateAuthToken = function () {
    const token = jwt.sign(
        { _id: this._id, name: this.firstName + this.lastName },
        process.env.JWT_KEY,
        { expiresIn: "30d" }
    );
    return token;
};

module.exports = mongoose.model("Admin", AdminSchema);
