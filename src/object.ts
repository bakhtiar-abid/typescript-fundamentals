let employee:{
   readonly id:number,
    name?: string,
    retire: (date: Date) => void;
} = {
    id: 1,
    name:"Abid",
    retire: (date: Date)=>{
        console.log(date);
        
    }
}

employee.name = "Abid";