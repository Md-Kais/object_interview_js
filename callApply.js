const normalPerson={
    firstName: "Md.",
    lastName: "Kais",
    getFullName: function(){
        return (`${this.firstName} ${this.lastName}`);
    },//anonymus function;
    salary:5500,
    VAT: function(amount){
        return (this.salary-amount);
    }

}
console.log(normalPerson.getFullName()); 
console.log(normalPerson.VAT(12)); 
//doen