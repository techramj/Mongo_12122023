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
    
  