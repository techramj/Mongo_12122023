db.items.insertMany([
    {   _id:1, 
        code:"xyz", 
        tags:["school","book","bag", "headphone","appliance"],
        qty:[
            {size:"S", num:10,color:"blue" },
            {size:"M", num:40,color:"blue" },
            {size:"L", num:100,color:"red" }
        ]
    },
    {   _id:2, 
        code:"abc", 
        tags:["school","book","appliance"],
        qty:[
            {size:"S", num:100,color:"blue" },
            {size:"M", num:46,color:"blue" },
            {size:"L", num:10,color:"red" }
        ]
    },
    {   _id:3, 
        code:"pqr", 
        tags:["bag", "headphone","appliance"],
        qty:[
            {size:"6", num:10,color:"green" },
            {size:"6", num:40,color:"brown" },
            {size:"8", num:100,color:"red" }
        ]
    },
    {   _id:4, 
        code:"lmn", 
        tags:["school","book","bag"],
        qty:[
            {size:"S", num:10,color:"blue" },
            {size:"M", num:40,color:"blue" },
            {size:"L", num:100,color:"red" }
        ]
    },
    {   _id:5, 
        code:"efg", 
        tags:[ "headphone","appliance"],
        qty:[
            {size:"S", num:10,color:"blue" },
            {size:"M", num:40,color:"blue" },
            {size:"L", num:100,color:"red" }
        ]
    },
    {   _id:6, 
        code:"mno", 
        tags:["school","book"],
        qty:[
            {size:"S", num:10,color:"blue" },
            {size:"M", num:100,color:"blue" },
            {size:"L", num:40,color:"red" }
        ]
    }
]);