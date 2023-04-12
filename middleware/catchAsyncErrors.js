module.exports = (theFunc) => (req, res, next) => {
  Promise.resolve(theFunc(req, res, next)).catch(next);
};

//Above is function that takes function as argument and that function takes argument of req,res,next and return the Promise.resolve or catch.
