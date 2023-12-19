db.emp.drop();
db.createCollection('emp');
db.emp.insertOne({id:100, name:'Jack'});

db.emp.insertMany([
	{id:3, name: 'Jackie', age:23},
    {id:4, name: 'Jackie', age:13},
    {id:5, name: 'Jackie', age:43},
    {id:6, name: 'Sam', age:53},
    {id:7, name: 'Sameer', age:24},
    {id:8, name: 'Ajay', age:25},
    {id:9, name: 'Ajay', age:76},
    {id:10, name: 'Jackie', age:28},
    {id:11, name: 'Ajay', age:43},
    {id:12, name: 'Jackie', age:53},
	{id:13, name: 'Vijay', age:23},
    {id:14, name: 'Jackie', age:13},
    {id:15, name: 'Ajay', age:43},
    {id:16, name: 'Jackie', age:53},
    {id:17, name: 'Ajay', age:24},
    {id:18, name: 'Jackie', age:25},
    {id:19, name: 'Ajay', age:76},
    {id:20, name: 'Ajay', age:28},
    {id:21, name: 'Jackie', age:43},
    {id:22, name: 'Ajay', age:53}
]);