const { StatusCodes } = require("http-status-codes");
const Supplier = require("../models/supplier");
//ErrorHandlers
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

//AddNewSupplier
const addSupplier = catchAsyncErrors(async (req, res, next) => {
  const { email } = req.body;
  const alreadyExist = await Supplier.findOne({ email });
  if (alreadyExist) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Email already exist" });
  } else {
    const newSupplier = new Supplier({
      ...req.body,
    });
    await newSupplier.save();
    return res
      .status(StatusCodes.CREATED)
      .json({ message: "Supplier created" });
  }
});

//GetAllSuppliers
const getAllSupplier = catchAsyncErrors(async (req, res, next) => {
  const suppliers = await Supplier.find({});
  if (suppliers) {
    return res.status(StatusCodes.OK).json({
      data: suppliers,
    });
  } else {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: "No Supplier found" });
  }
});

//DeleteSupplier
const deleteSupplier = catchAsyncErrors(async (req, res, next) => {
  const supplier = await Supplier.findById(req.params.supplierId);
  if (supplier) {
    await supplier.remove();
    res.status(StatusCodes.OK).json({ message: "Supplier deleted" });
  } else {
    res.status(StatusCodes.NOT_FOUND).json({ message: "Supplier not found" });
  }
});

module.exports = {
  addSupplier,
  getAllSupplier,
  deleteSupplier,
};
