/*
    what is bind?
      1. Bind an object to a function.
      2.reference it using 'this'.
*/
//bind reduce the code repitition and make code DRY
//bind is calling a function without owner of this function
//suppose rohit has an axe . and you land it to kais. and kais can chope the wood but kais is not the owner of the axe
// so bind is a function calling.

//lets call two object
let c_1={
    x:2,
    y:-2
}
let c_2 = {
    x:22222,
    y:-2333
}
function printObject(){
    console.log(this.x+','+this.y);
}
let ans_1=printObject.bind(c_1);
let ans_2 = printObject.bind(c_2);
ans_1();
ans_2();
printObject();//undifined, undifined . cause this or object can't mention before
