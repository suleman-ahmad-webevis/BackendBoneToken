const Product = require("../models/Products");
const multer = require("multer");

const Storage = multer.diskStorage({
    destination: "public/uploads",
    filename: (req, file, cb) => {
        cb(null, Date.now() + "_" + file.originalname);
    },
});

const upload = multer({
    storage: Storage,
}).single("productImage");

const handleErrors = (err) => {
    const error = {};

    if (err.message.includes("product validation failed")) {
        Object.values(err.errors).forEach(({ properties }) => {
            error[properties.path] = properties.message;
        });
    }
    return error;
};

module.exports.product_Post = async (req, res, next) => {
    upload(req, res, (err) => {
        if (err) {
            res.send(err.message)
        } else {
            const product = new Product({
                productImage: {
                    data: req.file.filename,
                    contentType: "image/jpeg",
                },
                name: req.body.name,
                description: req.body.description,
                rating: req.body.rating,
                category: req.body.category,
                usedorNew: req.body.usedorNew,
                gender: req.body.gender,
                height: req.body.height,
                weight: req.body.weight,
                color: req.body.color,
                season: req.body.season
            });
            product.save()
                .then((result) => {
                    res.send(result);
                    next();
                })
                .catch((err) => {
                    const error = handleErrors(err);
                    res.send(error);
                    next();
                });
        }
    });
};

module.exports.product_Get = (req, res) => {
    Product.find({}, (err, data) => {
        if (err) {
            res.send(err.message);
        } else {
            res.send(data);
        }
    });
};

module.exports.product_Update = async (req, res) => {
    await Product.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        .then((data) => {
            console.log(data)
            if (!data) {
                return res.status(404).send();
            }
            res.send(data);
        }).catch((err) => {
            const error = handleErrors(err)
            res.send(error)
        })
}

module.exports.product_Delete = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id, (err, data) => {
        if (err) {
            const error = handleErrors(err)
            res.send(error)
        }
        else {
            res.send(data)
        }
    })
}

module.exports.product_Category = async (req, res) => {
    await Product.find({ category: req.body.category })
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        const error = handleErrors(err)
        res.send(error)
    })
}