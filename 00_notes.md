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