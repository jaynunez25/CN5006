function EmployeeInfo(name, salary) {
    console.log("Welcome " + name + ", your monthly salary is " + salary);
}

console.log("This is my first program");

var EmpName = "Jesse Nunes";
var EmpSalary = 25000; // 

EmployeeInfo(EmpName, EmpSalary);

const EmpSlills = skills=> {
    
    console.log("Expert  in " + skills);

}

EmpSlills("java"); 

const student = require('./StudentInfo');
const person = require('./Person');

console.log("Student Name: " + student.getName());
console.log(student.Location())
console.log(student.dbo)

console.log(student.Studentgrade()) 
console.log("grade is "+student.Studentgrade(55)) 

person1= new person("Jim","USA","myemail@gmail.com") 
console.log("using Person Module",person1.getPersonInfo()) 
console.log("Programe ended") 

os=require("os") 
const util=require('util') 
console.log("temporary directory"+ os.tmpdir() ) 
console.log("hostname: "+ os.hostname()) 
console.log("OS : " + os.platform() +"release:"+ os.release()) 
console.log("Uptime"+ (os.uptime())/3600 +" hours") 
console.log("userInfo" + util.inspect(os.userInfo()))
console.log("Memory "+ os.totalmem()/1000000000 + "Giga byte") 
console.log(" free: "+os.freemem()/1000000000 + "Giga byte")
console.log("CPU "+ util.inspect(os.cpus())) 
console.log("Network"+ util.inspect(os.networkInterfaces())) 
console.log("programe end") 
