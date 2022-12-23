async function findQuery(req) {

    let query = { $and: [{}] };

    if (
        req.query.search != "undefined" &&
        (req.query.category == "null" || req.query.category == "undefined")
    ) {
        query.$and.push({
            $or: [
                {
                    name: {
                        $regex: ".*" + req.query.search + ".*",
                        $options: "i",
                    },
                },
            ],
        });
    }
    if (
        req.query.search != "undefined" &&
        req.query.search != "" &&
        req.query.category != "undefined" &&
        req.query.category != "null"
    ) {
        query.$and.push({
            $and: [
                {
                    name: {
                        $regex: ".*" + req.query.search + ".*",
                        $options: "i",
                    },
                    category: req.query.category,
                },
            ],
        });
    }
    if (req.query.category != "undefined" && req.query.category != "null") {
        query.$and.push({
            $and: [{ category: req.query.category }],
        });
    }
    if (req.query.featured != "undefined" && req.query.featured != "null") {
        query.$and.push({
            $and: [{ featured: true }],
        });
    }
    if (
        req.query.gender != "undefined" &&
        req.query.coatColor != "undefined" &&
        req.query.age != "undefined" &&
        req.query.breed != "undefined" &&
        req.query.dogGroupFCI != "undefined" &&
        req.query.season != "undefined"
    ) {
        query.$and.push({
            $and: [
                {
                    gender: req.query.gender,
                    coatColor: req.query.coatColor,
                    age: req.query.age,
                    breed: req.query.breed,
                    dogGroupFCI: req.query.dogGroupFCI,
                    season: req.query.season,
                },
            ],
        });
    }

    return query;
}

module.exports = { findQuery }

