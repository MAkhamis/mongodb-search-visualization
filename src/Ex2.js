// lookup index
// aagrgegation optimizer

db.getCollection("cities").aggregate([

    {
        $match: {
            country: "United States",
        }
    },
    {
        $lookup: {
            foreignField: "subcountry",
            localField: "subcountry",
            as: "subcountry",
            from: "subcountries",
        }
    },

    {
        $unwind: {
            path: "$subcountry",
            preserveNullAndEmptyArrays: true
        }
    },
    {
        $match: {

            "subcountry.class": "D"
        }
    },
])
    // .explain("executionStats")





















    // db.getCollection("cities").createIndex({country:1})
    // db.getCollection("subcountries").createIndex({subcountry:1})