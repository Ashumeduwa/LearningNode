function myprint(Fname,Lname = " Purohit"){
    const x = ('This is '+Fname + Lname);
    return x;
}
const abc = myprint("Rashmi");
console.log(abc)

const x = ()=>{
    return "Astrick";
}
console.log(x())