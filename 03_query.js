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