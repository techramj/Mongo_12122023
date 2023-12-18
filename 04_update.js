//update
db.student.insertMany([
    {'name':'jack', age:23, gender:'male'},
    {'name':'john', age:27, gender:'male'},
    {'name':'jessica', age:21, gender:'female'}
]);
//update the name of john to johny

db.student.updateOne({name:'john'}, {$set:{'name':'johny'}});

db.student.updateOne({name:'jessica1'}, {$set :{name:'jessica1', 'gender':'male'}},{upsert:true});



//update the emp with hiredate as currentDate

//$currentDate
db.collecton_name.updateOne( {filter}, {update_query});
db.emp.updateOne({name:'Ajay'}, {$currentDate:{hire_date:true}});

db.emp.updateMany({name:'Ajay'}, {$currentDate:{hire_date:true}});


//$inc
//increment the salary by 1000 5000= > 6000

db.emp.updateMany({salary:{$exists:true}}, {$inc:{salary:1000}})


//$min
db.minOpExample.insertMany([
    {_id:1, high:800, low: 150},
    {_id:2, high:500, low: 350},
    {_id:3, high:900, low: 400},
    {_id:4, high:80, low: 20},
]);

db.minOpExample.updateOne({_id:1}, {$min:{low:100}});




