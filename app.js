let allEmlpoyee=[] ;
//let form = document.getElementById("form");
let form= document.getElementById("form");
let cardDev= document.getElementById("cardDiv");
//console.log(form);
function Employee(EmployeeId,fullName,Department,level,imageURL)
{
this.EmployeeId=EmployeeId;
this.fullName=fullName;
this.Department=Department;
this.level=level;
this.imageURL=imageURL;
this.salary=this.GetSalary();
allEmlpoyee.push(this);
}

Employee.prototype.GetSalary= function()
{
 if (this.level == 'Junior') 
 {
    let min = 500 , max = 1000 ;
    return Math.random() * (max - min) + min;
 }
 else if (this.level == 'Mid-Senior')
 {
     let min = 1000 , max = 1500  ;
     return Math.random() * (max - min) + min;
 }
 else if (this.level == 'Senior') 
 {
     let min = 1500 , max = 2000 ;
     return Math.random() * (max - min) + min;
 }
}
Employee.prototype.render=function()
{ cardDev.innerHTML+=`<div class="card">
<img src ="./assets/card.png"/>
<h4>${this.fullName}</h4>
<h5>${this.salary}</h5>
<h2>Employee ID : ${UniqueNum()}</h2>
</div>
`
    /* document.write(`<img src ="./assets/card.png"/> `)
 document.write(`<h3>${this.fullName}</h3>`);
document.write(`<h3>${this.salary}</h3>`);
document.write(`<h2>Employee ID : ${UniqueNum()}</h2>`); */
}

let emp1 = new Employee('1000','Ghazi Samer','Adminstration','Senior');
let emp2 = new Employee('1001','Lana Ali','Finance','Senior');
let emp3 = new Employee('1002','Tamara Ayoub','Marketing','Senior');
let emp4 = new Employee('1003','Safi Walid','Adminstration','Mid-Senior');
let emp5 = new Employee('1004','Omar Zaid','Development','Senior');
let emp6 = new Employee('1005','Rana Saleh','Develpoment','Junior');
let emp7 = new Employee('1006','Hadi Ahmad','Finance','Mid-Senior');
/*let employeId= prompt("what is your id ? ");
let fullname= prompt("what is your full name ?");
let dep = prompt("what is your department? ");
let leve= prompt ("what is your level?") ;
let imge= prompt ("upload ur url") ;
let salar= prompt ("what is  your salary ? ") ;
*/
//let newEmployee = new Employee (EmployeeId,fullName,Department,level,imageURL,salary);

console.log(allEmlpoyee);
emp1.render();
emp2.render();
emp3.render();
emp4.render();
emp5.render();
emp6.render();
emp7.render();
//document.writeln(newEmployee);
//****************************************************************************************************** */


form.addEventListener("submit",handleSubmit);

function handleSubmit(event)
 {
    event.preventDefault(); 
   // console.log(event.target.fname.value);
let full_Name = event.target.fname.value ;
let depart= event.target.Deps.value;
let levels=event.target.levels.value;
let image = event.target.image.value ;
console.log(full_Name,depart,levels,image);

let newEmp= new Employee (full_Name,depart,levels,image);
newEmp.render(); 

}
 

function UniqueNum () 
{

    var val = Math.floor(1000 + Math.random() * 9000);
    return val
    
}


