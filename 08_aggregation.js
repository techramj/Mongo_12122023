
/*
--aggregation
db.<collection_name>.aggregate(pipes);

db.<collection_name>.aggregate([
    {$match}],
    {$sort},
    {$group},
    {$project},
    ...
    ...
]);
*/

//list of male person
db.persons.find({gender:'male'});

db.persons.aggregate([
    {$match :{gender:'male'}}
]);

//state wise no of male person 
db.persons.aggregate([
    {$match :{gender:'male'}},
    {$group: {_id:{state:"$location.state"}, totalPerson: {$sum:1}}}
]);


//state wise no of male person and sort the data in ascending order of total count
db.persons.aggregate([
    {$match :{gender:'male'}},
    {$group: {_id:{state:"$location.state"}, totalPerson: {$sum:1}}},
    {$sort: {totalPerson:1}}
]);



