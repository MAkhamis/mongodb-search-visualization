// covered query
db.getCollection("cities").aggregate([

    {
        $match: {
            country: "United States",
        }
    },
    {
        $project:{
            // _id:0,
            name:"$name"
        }
    }
])
    .explain("executionStats")





















    // db.getCollection("cities").createIndex({country:1})
    // db.getCollection("cities").createIndex({country:1,name:1})