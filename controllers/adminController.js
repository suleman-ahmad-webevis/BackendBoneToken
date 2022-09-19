const Admin = require('../models/admin');
const { StatusCodes } = require("http-status-codes");
const catchAsync = require("../utils/catchAsync");

//RegisterAdmin
const registerAdmin = catchAsync(async (req, res) => {
    const admin = await Admin.create(req.body);
    return res.status(StatusCodes.CREATED).json({ admin });
});

//LoginAdmin
const loginAdmin = catchAsync(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json({ error: "Please enter valid email and password" });
    const admin = await Admin.findOne({ email: email });
    if (!admin)
        return res.status(StatusCodes.NOT_FOUND).json({ error: "Admin not found" });
    const isCorrect = await admin.checkPassword(password);
    if (isCorrect) {
        const token = admin.generateAuthToken();
        return res.status(StatusCodes.OK).json({ token, admin });
    } else
        return res
            .status(StatusCodes.UNAUTHORIZED)
            .json({ error: "Incorrect password" });
});

module.exports = { loginAdmin, registerAdmin };
