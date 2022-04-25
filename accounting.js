
let tableEl = document.getElementById("tableID");
Employee.prototype.renderTable = function () {
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);

    let tdEl1 = document.createElement('td');
    trEl.appendChild(tdEl1);
    tdEl1.textContent = this.Department;

     let tdEl2 = document.createElement("td");
     trEl.appendChild(tdEl2);
     tdEl2.textContent = this.fullName;
}

function renderAll() {
    for (let i = 0; i < allEmlpoyee.length; i++) {
       // allDrinks[i].render();
        allEmlpoyee[i].renderTable();
   
    }
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
/*function counts()
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
}

counts();
//console.log() ; */