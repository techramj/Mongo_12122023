//validlation of emp
db.createCollection("emp",{
    validator:{
        $jsonSchema:{
            bsonType: "object",
            required: ["name", "salary"],
            properties :{
                name:{bsonType:"string", description:"name is mandatory, must be a string"},
                salary:{bsonType:"number", description:"salary is mandatory, must be a number"}
            }
        }
    }
});