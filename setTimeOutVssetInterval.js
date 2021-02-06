console.log(6666);
setTimeout(() => {console.log(7888666);},2000);

//asynchronus method

//setTimeout means that it executes at last and at ones!  here time variable is minimum miliseconds! 
//tricky question:(time needs to execute)
// it time needs to execute time=> min(provided_time,time_needs-to _execute_all_work);)


console.log(6666);
console.log(6666);

console.log(6666);
console.log(6666);
//setInterval():
setInterval(()=>{
    console.log('fucka khaw mael morningster');
},1333);
//setInterval works like setTimeout() but the major difference is setInterval execute many time after the provided time. it has no breaking rule to stop it.it executes over and over again after the provided time. 
//setInterval times needed: exactly provided time . heres, 2333 ms.it doesnot need to execute all shits first. setInterval always maintain provided time
