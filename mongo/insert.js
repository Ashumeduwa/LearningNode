const getData = require('./connection'); //importing connections

const insert = async ()=>{

    const db = await getData();
    const result = await db.insert([{
        "Fname": "Premlata",
        "LName": "Sharma",
        "Phone": 8291626282,
        "add": "kalyan"
    },
    {
        "Fname": "Sushil",
        "LName": "Sharma",
        "Phone": 8291626282,
        "add": "kalyan"
    }])
    if(result.acknowledged){
        console.log("entry added")
    }

}

insert();   