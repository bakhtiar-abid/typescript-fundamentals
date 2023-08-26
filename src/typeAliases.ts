type Employee = {
    readonly id:number,
    name?: string,
    retire: (date: Date) => void;
}


let employeeOne: Employee = {
     id: 1,
     name:"Abid",
     retire: (date: Date)=>{
         console.log(date);
         
     }
 }
 
 employee.name = "Abid";


 type CarYear = number
type CarType = string
type CarModel = string

type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car: Car = {
  year: carYear,
  type: carType,
  model: carModel
};