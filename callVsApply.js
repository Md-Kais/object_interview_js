//call vs Apply
// call -> c, comma
//apply -> a, array
//call and apply is almost same. you have to call a object like this : 
//call:
//syntax: name_of_the-object_where_original_function_is_created.function_name.call(where_u_apply,data1,data2,data3,........................,dataN);
const normalPerson = {
    firstName: "Md.",
    lastName: "Kais",
    getFullName: function () {
        return (`${this.firstName} ${this.lastName}`);
    },//anonymus function;
    salary: 5500
   
}
const heroPerson = {
    firstName: "Masfdsdaf",
    lastName: "Ksfsadfd",
    getFullName: function () {
        return (`${this.firstName} ${this.lastName}`);
        
    },//anonymus function;
    salary: 10500,
    netSalary: function(TAX, tips, dutyless) {
        return (this.salary - TAX - tips - dutyless);
        console.log('hello');
    }
}
//call->comma
console.log(heroPerson.netSalary.call(normalPerson,55,550,100));//4795
console.log(heroPerson.netSalary.call(heroPerson, 55, 550, 100));//9795
//apply-> array
//data is passed by the help of array
//syntax: name_of_the-object_where_original_function_is_created.function_name.call(where_u_apply,[data1,data2,data3,........................,dataN]);

console.log(heroPerson.netSalary.apply(normalPerson, [55, 550, 100]));//4795
console.log(heroPerson.netSalary.apply(heroPerson, [55, 550, 100]));//9795
