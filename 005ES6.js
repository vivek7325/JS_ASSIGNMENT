//Differences in Let ,const , and  var


/*

Var

1) Very old Variable declaring keyword
2) Global Scoped Variable 
3) can be redcalred same variable
4) can be redfined

Let

1) New Variable declaring Keyword in ES 6
2) Blocked Scoped Variable, means- accessible anywhere within block not outside of it
3) can not redcalred same variable
4) can be redfined

Const

1) New Variable declaring Keyword in ES 6
2) Blocked Scoped Variable, means- accessible anywhere within block not outside of it
3) can not redcalred same variable
4) can not be redfined

*/


//USECASES:-


//Var

// a) Global Scope Variable
var student = "Ram";
function printData(){
    console.log(student);
}
printData();

// b) Hoisting 

function ShowRecord(){
    console.log(Employee);   // Show no Reference Error Bcoz only declaration done not initialization
}
ShowRecord();
var Employee = "Ram";

// c) Can Be uninitialized Variable
var IsValid;
console.log(IsValid);


// d) can be redeclared and redefined
var student = "Anuj";  
console.log(student);
student="Akash";
console.log(student);


// let 

// a) Blocked Scope Variable

function printName(){
    let Name = "Ram";
    console.log(Name);
}
printName();
// console.log(Name);    //  ReferenceError: Name is not defined

// b) redefintion with variable

let Lastname = "Ram";
console.log(Lastname);
Lastname = "Lakshman";
console.log(Lastname);

// Const Usecases


// a) make immutable variable
const a = 4685645762874;
console.log(a);
// a=85734583476; TypeError: Assignment to constant variable.
// console.log(a);

// b) Object creation with value redefinition
const EmployeeRecord = {
    name:"Neerav",
    age:22,
    IsIntern:true,
}

EmployeeRecord.name="Akshit";  // key value redefined 
for (let i in EmployeeRecord){
    console.log(EmployeeRecord[i]);
}
// c) blocked scope variable declaration
function showvalue(){
    const h=10;
    console.log(h);
}

// console.log(h); cant access and error 




// LIMITATIONS


// A) const

// Const must be decalred with value otherwise reference error

// const Fruit;
// console.log(Fruit); SyntaxError: Missing initializer in const declaration

// cant not hoisted
console.log(h);  // ReferenceError: Cannot access 'h' before initialization
const h=12;
// neither redefined and redeclared
// h=10;
// const h=11;   // shows error





// B)  Let 
// cant not hoisted
console.log(j);  // ReferenceError: Cannot access 'h' before initialization
let j=12;
// cant be redeclared
// let j=13;

// C) Var 

// unexpected error

if(true){
    console.log(age);  // shows undefined
    var age = 19;
}
console.log(age); //  access here out of block



