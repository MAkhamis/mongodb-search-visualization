// parallel indexing

db.getCollection("countries").createIndex({ populationCounts: 1, "class": 1 });

db.getCollection("countries").createIndex({ populationCounts: 1, "sats": 1 });
db.getCollection("countries").insertOne(
    {

        "country": "DevStan",
        "code": "dev",
        "iso3": "dev",
        "populationCounts": [
            {
                "year": 2018,
                "value": 25
            }
        ],
        "class": [
            "D"
        ],
        "sats": ["moon", "moon2"],
        "planets": [
            "earth"
        ]
    });