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



