console.log("This is tutorial 53");

// Here the text written in greetText, is called default value and is taken when some value is not provided to function.
function greet(name, greetText = "Greetings from javascript!"){

    console.log(greetText+ " " +name);
    console.log(name + " is a good boy")
    // This function has no return value
}

function sum(a,b,c){
    d=a+b+c;
    return d;
}
let name1 = "Hemil";
let name2 = "Ronak";
let name3 = "Mittal";
let name4 = "Amit";
greetText = "Good Morning"
// function call 
greet(name1, greetText);
greet(name2, greetText);
greet(name3, greetText);
greet(name4);
console.log(sum(1,2,3));