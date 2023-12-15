/* query and projection */
db.collection_name.find({filter}, {projection});

/* 01 record with qty = 1 */
db.inventory.find({qty:11});

//equals =>  $eq
db.inventory.find({qty: {$eq:11}});

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

