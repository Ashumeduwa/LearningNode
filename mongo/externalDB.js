const getData = require('./connection'); //importing connections


async function main(){ //async to handle promise
    let data = await getData(); // await to handle promis, saving objects in data
    data = await data.find().toArray();
    console.log(data);
}

main();