console.log("This is module"); 
function average(arr){
    let sum=0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}
// Here it is only returning the average function as single functionality is expected to be used.
// module.exports = average; 

// here module.exports is a object and is used to export the functionalities to other files as object can have multiple key and its values
// it can return one or more things using 
// module.exports = {
//     avg: average,
//     name: "Hemil",
//     repo: "GitHub"
// }
// Here it can return key value pair without defining any object coz module.exports itself is an object 
module.exports.name = "Hemil";