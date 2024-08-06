// prefix index
// sort index
// range index
db.getCollection("cities").aggregate([
    { $sort: { name: 1, subcountry: 1 } },
    {
        $match: {
            geonameid: { $gte: 4000_000, $lte: 5000_000 },
            country: "United States",
            subcountry: "Alabama",
        }
    },
])
//    .explain("executionStats")























//db.getCollection("cities").createIndex({country:1,subcountry:-1,name:1,geonameid:1})
//db.getCollection("cities").createIndex({country:1,subcountry:-1,geonameid:1,name:1})