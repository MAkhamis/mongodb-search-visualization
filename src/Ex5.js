// hinting

db.getCollection("countries").aggregate(
    [
        {
            $sort: { "populationCounts.year": 1 }
        },
        {
            $match: {
                class: { $in: ["A"] }
            }
        }
    ]
    ,

)

    .explain("executionStats")



























    db.getCollection("countries").createIndex({"class":1})
    //
    db.getCollection("countries").createIndex({"populationCounts.year":1})
    //    {hint:"populationCounts.year_1"}