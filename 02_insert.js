/*Insert one record in customers collection  */
/*id,name,mobno,age */

/*
syntax: db.<collectin_name>.insert({}); deprecated
syntax: db.<collectin_name>.insertOne({});  //to insert one record
syntax: db.<collectin_name>.insertMany([{},{}]); to insert multiple record
*/

db.customers.insert({id:1, name: 'Jack', mobileNo: '1231231231', age:23}); //deprecated
db.customers.insertOne({id:2, name: 'Jackie', age:23});
db.customers.insertOne({
  id: 2,
  name: "Jackie",
  age: 23,
  mobile: { type: "Prepaid", no: "2223334445" },
});


db.customers.insertMany([
    {id:3, name: 'Jackie', age:23},
    {id:4, name: 'Jackie', age:13},
    {id:5, name: 'Jackie', age:43},
    {id:6, name: 'Jackie', age:53},
    {id:7, name: 'Jackie', age:24},
    {id:8, name: 'Jackie', age:25},
    {id:9, name: 'Jackie', age:76},
    {id:10, name: 'Jackie', age:28},
    {id:11, name: 'Jackie', age:43},
    {id:12, name: 'Jackie', age:53}
]);


/*select or fetch the record/document*/
db.customers.find();


/*create collection inventory*/
//db.createCollection('inventory');
db.inventory.insertMany(
  [
      {_id:1,item:{name:'ab',code:'123'},qty:10, tags:['A','B','C']},
      {_id:2,item:{name:'cd',code:'123'},qty:11, tags:['D','E','M']},
      {_id:3,item:{name:'ef',code:'456'},qty:12, tags:['F','B','D']},
      {_id:4,item:{name:'gh',code:'456'},qty:13, tags:['G','O','C']},
      {_id:5,item:{name:'ij',code:'567'},qty:10, tags:['A','E','D']},
      {_id:6,item:{name:'ij',code:'567'},qty:10, tags:[['A','B'],'D']},
      {_id:7,item:{name:'ij',code:'567'},qty:10, tags:['A','B']}
  ]
  );


  