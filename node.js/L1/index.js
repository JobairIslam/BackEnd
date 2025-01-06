const getName=()=>{
    return "juair islam asif";
}

const getCity = () =>{
    return "khulna";
}
let cgpa=3.47;

getName();

// exports.name = getName;
// exports.city = getCity;
// exports.result=cgpa;
module.exports={
    getName,
    getCity,
    cgpa
}