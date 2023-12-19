# NoSQL
    Not only Sql or non-relational database


# characterstic of NoSQl
    1. Schema free
    2. eventually consisten (BASE (Basically ,Available, Soft state, Eventually consistency) property)
    3. Replication of data stroes to avoid single point of failure
    4. can handle huge amount of data.



# Types of NoSQl database
## Key-value stores
    eg: Redis, Oracle BDB, Voldemort

## column Family store
    eg: Cassandra, Hbase


## Document Database
   eg:  MongoDb, Couchbase


## Garph Databases
   eg: Neo4j, HyperGraphDb
   


# setup
## Download & install mongodb
    https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-7.0.4-signed.msi

## download shell zip file
    https://downloads.mongodb.com/compass/mongosh-2.1.1-win32-x64.zip
### unzip & copy mongosh.exe to build path
        eg: C:\Program Files\MongoDB\Server\7.0\bin

##  set the path in system environment variable 
    in the path of system env variable add the path of bin folder in path variable.
    To check execute mongod in cmd


# Introduction of MongoDb

## component
    Atlas: Cloud version. Db will be on cloud
    Mongod: Mongo Daemon or Mongo server that will host our db
    mongosh: Mongo shell. we can execute the query in mongosh. It support JS
    Compass : Compass is a GUI, where we can execute the query, will see the result in fancy format.


## Analogies
    SQl             Mongodb
    Database        Database
    Table           Collection
    Row             Document
    Column          Field

## basic commands
### display list of db
    show dbs

### to create new db or to connect to existing db
    use <database_name>
    use seed

### display the db name
    db

### Drop database
    eg: drop database seed
    use seed
    db.dropDatabase();

### create collection
    db.createCollection(<collection name>);
    eg: db.createCollection('customers');
    output: { ok: 1 }

### drop collection
    db.<collection name>.drop();
    eg: db.customers.drop();
    output will be boolean. true mean collection deleted and fasle means no collection with name

### insert record in collection
    db.<collectin_name>.insertOne({});  //to insert one record
    db.<collectin_name>.insertMany([{},{}]); to insert multiple record

### display record
    db.<collection_name>.find();

### diplay list of collection in a db
    show collections


### query syntax
    db.<collection_name>.find([{filter}],[{projection}]);
    eg: fetch the record with qty = 10
        db.inventory.find({qty:10});

### operators
#### eq
    db.inventory.find({qty: {$eq:11}})

#### equals =>  $eq
    db.inventory.find({qty: {$eq:11}});

#### not equals =>  $ne
    db.inventory.find({qty: {$ne:10}});

#### less than => $lt
    db.inventory.find({qty: {$lt:11}});

####  less than equal to => $lte
    db.inventory.find({qty: {$lte:11}});

####  greater than =>  $gt
    db.inventory.find({qty: {$gt:11}});

#### greater than equal =>  $gte
    db.inventory.find({qty: {$gte:11}});

#### record with qty =11 and select only qty, id as field
    db.inventory.find({ qty: { $eq: 11 } }, { qty: 1, item: 1 });

#### $in
    db.inventory.find({qty: {$in:[11,12]}});

#### $nin
    db.inventory.find({qty: {$nin:[11,12,10]}});

### LOGICAL OPERATOR 
#### $and
    db.inventory.find({
    $and: [{ qty: { $eq: 10 } }, { tags: { $eq: "B" } }],
    });

#### $or
    db.inventory.find({
        $or: [{ qty: { $eq: 11 } }, { tags: { $eq: "C" } }],
    });

#### $not
    db.inventory.find({qty: {$not : {$gt:10}}});


### ELEMENT OPERATOR
#### $exists
    to check whether the field are present or not
    db.inventory.find({qty: {$exists: false}});
    db.inventory.find({qty: {$exists:true, $eq:11}});

#### $type
    db.inventory.find({qty: {$type:'string'}});


### EVALUATION OPERATOR
#### $expr
    db.budgets.find({$expr:{$gt:["$spent", "$budget"]}})

#### $mod
    db.budgets.find({budget : {$mod: [100, 50]}});

#### $text
    db.articles.find({$text :{$search:'java'}});


### array operators
#### $all

#### $elemMatch : condition is applicable for each element







### create text index
    db.<collection_name>.createIndex({field:"text"});
    db.articles.createIndex({subject:"text"});
### exeute script (oracle sql vs mongodb)
#### oracle sql
    create the script example => script/emp.sql
    sqlplus> @<absolutepath with filename>
    eg: sqlplus>@ d:\12_dec_2023\script\emp.sql

#### mongodb
     create the script example => script/emp.js
     cmd> mongosh <database name> <absoulute path with filename>
     eg: cmd>mongosh seed  d:\12_dec_2023\script\emp.js


### import json file
####   step 1: download the tool => mongoimport
        https://fastdl.mongodb.org/tools/db/mongodb-database-tools-windows-x86_64-100.7.3.zip

####   step 2: unzip the file and copy all the tools from bin folder.
####   step 3: paste the tools to bin folder of MongoDb( C:\Program Files\MongoDB\Server\7.0\bin)

 ####  step 4: execute the mongoimport command in cmd
        syntax: mongoimport <json-file_name> -d <database_name> -c <collection_name> --jsonArray
        note: cmd path should be same as file path
        eg: mongoimport <json-file_name> -d seed -c persons --jsonArray


