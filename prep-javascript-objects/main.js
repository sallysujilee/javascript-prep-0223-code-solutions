const person = {firstName: "Sally", lastName: "Lee", hobby: "playing Valorant"};
console.log(person);

const fullName = person.firstName + " " + person.lastName;
console.log('The person\'s name is:', fullName);

person.job = "optician";
console.log(person.job);
console.log('the person\'s current job is:', person.job);

person["previousJob"] = "regional manager";
console.log('The person\'s previous job is:', person["previousJob"]);

console.log(person);
