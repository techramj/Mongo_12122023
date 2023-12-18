/* query and projection */
db.collection_name.find({filter}, {projection});

//example based on 01_inventory.js
/* 01 record with qty = 1 */
db.inventory.find({qty:11});

//equals =>  $eq
db.inventory.find({qty: {$eq:11}});

//not equals =>  $ne
db.inventory.find({qty: {$ne:10}});

//less than => $lt
db.inventory.find({qty: {$lt:11}});

// <=  => $lte
db.inventory.find({qty: {$lte:11}});

//greater than =>  $gt
db.inventory.find({qty: {$gt:11}});

//greater than equal =>  $gte
db.inventory.find({qty: {$gte:11}});

//record with qty =11 and select only qty, id as field
db.inventory.find({ qty: { $eq: 11 } }, { qty: 1, item: 1 });

//$in
db.inventory.find({qty: {$in:[11,12]}});

//$nin
db.inventory.find({qty: {$nin:[11,12,10]}});



/*        LOGICAL OPERATOR            */
//$and
db.inventory.find({
  $and: [{ qty: { $eq: 10 } }, { tags: { $eq: "B" } }],
});

//$or
db.inventory.find({
    $or: [{ qty: { $eq: 11 } }, { tags: { $eq: "C" } }],
  });

//$not
db.inventory.find({qty: {$not : {$gt:10}}});



/*      ELEMENT OPERATOR    */
/*
$exists
to check whether the field are present or not
*/

db.inventory.find({qty: {$exists: false}});
db.inventory.find({qty: {$exists:true, $eq:11}});

//$type
db.inventory.find({qty: {$type:'string'}});


/*      EVALUATION OPERATOR    */
//$expr
db.budgets.find({$expr:{$gt:["$spent", "$budget"]}});

//$mod
db.budgets.find({budget : {$mod: [100, 50]}});

//$text
//record which contain java
//note: text can be only applied on indexed field

db.articles.find({$text :{$search:'java'}});



/*          Array Oprator      */
//$all  => refer 05_items.js
//documents/records which contains headphone,bag

db.items.find({tags : {$all:['headphone', 'bag']}});

db.items.find({
  $and: [{ tags: { $eq: 'headphone' } }, { tags: { $eq: "bag" } }],
});


//$elemMatch
db.inventory.insertMany([
  {_id:1,"result":[80,89,98]},
  {_id:2,"result":[80, 82,87]},
  {_id:3,"result":[20,40,60]},
  {_id:4,"result":[5,10,15,30]},
]);

//record which is >80 < 90
db.inventory.find({result: {$gt:80, $lt:85}});
db.inventory.find({ result: { $elemMatch:{$gt:80, $lt:85}}});


db.items.find({qty:{$elemMatch : {size:'M', num:{$gt:80}}}});


//$size
db.inventory.find({result: {$size:4}});


  db.customers.insertmany([
    {
      _id: "C001",
      name: "Jack",
      age: 20,
      orders: [
        {
          orderId: 1001,
          products: [
            { product: "Pen", qty: 10, price: 20 },
            { product: "notebook", qty: 5, price: 100 },
          ],
        },
      ],
    },
    { _id: "C001", name: "sam", age: 21 },
    { _id: "C001", name: "Jessica", age: 20 },
  ]);