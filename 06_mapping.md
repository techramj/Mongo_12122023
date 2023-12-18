# One to One
    emp: id,name,salary
    address: , street city, pincode

  ## first approach
    db.emp.insertOne({_id:1, name:'jack', salary:3000});
    db.address.insertOne({_id:1, steet:'Lane no 4', city:'Pune', pincode:411011 });


  ## 2nd approach
    db.emp.insertOne({_id:1, name:'jack', salary:3000, 
    address:{ steet:'Lane no 4', city:'Pune', pincode:411011 }
    });


# One to Many /Many to one
  Question & Answers
 

  ## approach 1
    db.questions.insertOne({creator:'sam', question:'Advantage of MongoDB", code:"Q1", answers:['Q1A1', 'Q2A2']});
    db.answers.insertMany([
      {"_id":"Q1A1", ans:"Flexible, schemaless db"},
      {"_id":"Q1A2", ans:"Easy horizontal scale-out sharding"},
    ]);


   ## approach 2
    db.questions.insertOne({creator:'sam', question:'Advantage of MongoDB", code:"Q1", 
    answers:[
      { ans:"Flexible, schemaless db"},
       { ans:"Easy horizontal scale-out sharding"}
    ]});


   ## approach 3
      db.questions.insertOne({creator:'sam', question:'Advantage of MongoDB", code:"Q1", 
      answers:["Flexible, schemaless db","Easy horizontal scale-out sharding"]
      });
      
   ## Mapping for city & citizen
   ### approach 1: (better)
    db.city.insertOne({
      _id:10001, name:'Pune', 
      citizens: [1,2 ,3]
    });

    db.citizens.insertMany([
      {_id:1, name:'Jack', age:20,},
      {_id:2, name:'Jack', age:20,},
      {_id:3, name:'Jack', age:20,},
    ]);

  ### approach 2:
    db.city.insertOne({
      _id:10001, name:'Pune', 
      citizens: [ {_id:1, name:'Jack', age:20,},
      {_id:2, name:'Jack', age:20,},
      {_id:3, name:'Jack', age:20,},]
    });

# Many to Many
    order  -> product

## approach 1
    db.products.insertMany([
      {_id:1, item:'Pen', price:20},
      {_id:2, item:'Pencil', price:10},
      {_id:3, item:'NoteBook', price:100}
    ]);

    db.customers.insertmany([
      {_id:'C001', name:'Jack', age:20},
      {_id:'C001', name:'sam', age:21},
      {_id:'C001', name:'Jessica', age:20}
    ]);

    db.orders.insertOne({
      _id:1001, custId: 'C001',
      products:[{productId:1, qty: 10}, {productId:3, qty:20}]
    });

## approach 2
    db.products.insertMany([
        {_id:1, item:'Pen', price:20},
        {_id:2, item:'Pencil', price:10},
        {_id:3, item:'NoteBook', price:100}
      ]);

      db.customers.insertmany([
      {
        _id: "C001",
        name: "Jack",
        age: 20,
        orders: [ {orderId: 1001, products:[{productId:1, qty: 10}, {productId:3, qty:20}]} 
        ],
      },
      { _id: "C001", name: "sam", age: 21 },
      { _id: "C001", name: "Jessica", age: 20 },
    ]);


## approach 3

   db.products.insertMany([
      {_id:1, item:'Pen', price:30},
      {_id:2, item:'Pencil', price:10},
      {_id:3, item:'NoteBook', price:100}
    ]);

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



# validation
db.createCollection('emp');
db.emp.insertOne