//Initialize a new array constructor
var a = new Array();
//Initialize a arry in the runtime
var b = [];

//Adding a custom method in Array
function Array(){
    this.is = "Array";
}

console.log("a.is --> ",a.is); //this will work as we initialize the a constructor above
console.log("b.is --> ",b.is); //this will show error as no is method is defined in default Array class

//This will not work as the push is never defined above
try{
    a.push('wow');
}catch(e){
    console.log(e)
}
//This will work as push is the default method in the Array.
b.push("wow");
console.log("lenght of b ",b.length);