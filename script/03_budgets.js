db.budgets.drop();
db.budgets.insertMany([
    {_id:1, category:'food', budget:500, spent:450},
    {_id:2, category:'clothes', budget:1000, spent:750},
    {_id:3, category:'drink', budget:200, spent:550},
    {_id:4, category:'travel', budget:350, spent:550},
    {_id:5, category:'medicine', budget:500, spent:600},
    {_id:6, category:'misc', budget:400, spent:400},
]);