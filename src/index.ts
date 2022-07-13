//Interface

interface data{
    title:string;
    status:boolean;
    id:number;
}

const data1:data={
    title:"Todos",
    status:false,
    id:1
}

// Function Interface


interface person{
    firstName:string;
    lastName:string;
}
const getName=({firstName,lastName}:person)=>
{
  if(firstName&&lastName)
  {
    return(`${firstName}_${lastName}`)
  }
  else
  {
    return(`${firstName}`)
  }

}

let output:person=
{
    firstName:"Gagan",
    lastName:'Chandan'
}

console.log(getName(output));


//Address

interface Address{
  houseNumber:number;
  street:string;
  city:string;
  postalCode:number;
  country:string;
}

const address:Address={
  houseNumber:1234,
  street:"Vivek Nagar",
  city:"KGF",
  postalCode:563122,
  country:"India"
}

console.log(address);


// PersonalDetails

interface personDetails{
  phones:number[];
  addresses:string[];
  email?:string;
  firstname:string;
  lastname:string;
  middlename?:string;
}

const details:personDetails={
  phones:[123456789],
  addresses:["123/","Efg","hij","563122"],
  firstname:"Gagan",
  lastname:"Chandan",
}
console.log(details);