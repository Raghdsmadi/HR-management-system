let allEmlpoyee=[] ;
//let addedEmployees=[];
let form= document.getElementById("form");
let cardDev= document.getElementById("cardDiv");

function Employee(EmployeeId,fullName,Department,level,imageURL)
{
this.EmployeeId=EmployeeId;
this.fullName=fullName;
this.Department=Department;
this.level=level;
this.imageURL=imageURL;
this.salary=this.GetSalary();
//allEmlpoyee.push(this);
/*for(let i=0; i<allEmlpoyee.length;i++)
{
if(allEmlpoyee[i].fullName != this.fullName)
    {allEmlpoyee.push(this); }
    //allEmlpoyee.push(this);
}*/
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
//allEmlpoyee.push(this);  
}

let emp1 = new Employee('1000','Ghazi Samer','Adminstration','Senior');
let emp2 = new Employee('1001','Lana Ali','Finance','Senior');
let emp3 = new Employee('1002','Tamara Ayoub','Marketing','Senior');
let emp4 = new Employee('1003','Safi Walid','Adminstration','Mid-Senior');
let emp5 = new Employee('1004','Omar Zaid','Development','Senior');
let emp6 = new Employee('1005','Rana Saleh','Develpoment','Junior');
let emp7 = new Employee('1006','Hadi Ahmad','Finance','Mid-Senior');
/*allEmlpoyee.push(emp1);
allEmlpoyee.push(emp2);
allEmlpoyee.push(emp3);
allEmlpoyee.push(emp4);
allEmlpoyee.push(emp5);
allEmlpoyee.push(emp6);
allEmlpoyee.push(emp7);*/
console.log(allEmlpoyee);

//****************************************************************************************************** */

function renderAll() {
    for (let i = 0; i < allEmlpoyee.length; i++) {
        allEmlpoyee[i].render();
       console.table(allEmlpoyee);
    }
    console.log(allEmlpoyee);
    
}

renderAll();

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

let newEmp= new Employee (UniqueNum(),full_Name,depart,levels,image);
newEmp.render(); 
//newEmp.renderTable();

//allEmlpoyee.push(newEmp);
saveData(allEmlpoyee);

}
 

function UniqueNum () 
{

    var val = Math.floor(1000 + Math.random() * 9000);
    return val
    
}


function saveData(data) {
    let stringObj = JSON.stringify(data);
    localStorage.setItem("employees", stringObj);
 
}


function getData() {
    let retrievedData = localStorage.getItem("employees");
    // console.log(retrievedData);
     
      let arrayData = JSON.parse(retrievedData);
      //console.log(arrayData);
  
      if (arrayData != null)
       { 
        arrayData=arrayData.slice(6,);
          
          for (let i = 0; i < arrayData.length; i++) {
            var element = new Employee(
              arrayData[i].EmployeeId,
              arrayData[i].fullName,
              arrayData[i].Department,
              arrayData[i].level,
              arrayData[i].imageURL,
              arrayData[i].salary
              
            );
            element.render();
          }
        
         // element.render();
      }
  
  }

 getData();

 /* function counts()
{
var countAd=0
var countM=0;
var countD=0;
var countF=0;
for(let i=0; i<allEmlpoyee.length;i++){
if (Department=='Administration') countAd ++ ;
else if (Department=='Marketing') countM++ ;
else if (Department=='Development') countD++;
else countF++;
}
console.log(countAd);
//console.log(count);
}
counts(); */
//localStorage.clear();