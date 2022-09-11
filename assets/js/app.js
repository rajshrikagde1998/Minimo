//alert('practice')

let cl=console.log

// push : it is used to add last element of Array

 // pop : it is used to remove/delete last element of Array
 
 // shift : it is used to remove/delete First element of Array
 
 // unshift : it is used to add First element of Array
 
 
 
 let person = [
 
 {
	Fname : "riya" ,
	age : 45,
	contact : 6578798
	 
},
 {
	Fname : "riyu" ,
	age : 40,
	contact : 657879
	 
},
 {
	Fname : "riyaa" ,
	age : 56,
	contact : 657798
	 
},
 {
	Fname : "riyan" ,
	age : 35,
	contact : 678798
	 
},
 {
	Fname : "riyani" ,
	age : 75,
	contact : 65787988
	 
},
 {
	Fname : "riyansh" ,
	age : 85,
	contact : 65787985
	 
}

 ]
 
 cl(person)
 
 
 
 let lastperson ={
	 
	Fname : "riyanshu",
	age : 25,
	contact : 65787985
	 
}

person.push(lastperson)
cl(person)

 
 
 let firstperson ={
	 
	 Fname : "shree",
	 age : 20,
	 contact : 65787985
	 
	 
 }
 
 person.unshift(firstperson)
 cl(person)
 
 
 let RemoveLastPerson = person.pop()
 cl(RemoveLastPerson)
 
 
 let RemoveFirstPerson = person.shift()
 cl(RemoveFirstPerson)
 
 
 
 
 
 
 let skill=["html4","css","javaScript","Angular","html5","css3","SASS"]
 
 cl(skill.length)
 
 let lastskill = skill.pop()
 cl(lastskill)
 cl(skill)
 
 
 let firstSkill = skill.shift()
 cl(firstSkill)
 cl(skill)
 
 let addLastSkill = skill.push('angular')
 cl(addLastSkill)
  cl(skill)
  
let addFirstSkill = skill.unshift("html")  
  cl(addFirstSkill)
  cl(skill)
  
  
  
  
  let digit = [23,56,78,98,65,78,98,56,08,97]
  cl(digit.length)
  cl(digit)
  
  
  let AddLastDigit = digit.push(1000)
  cl(AddLastDigit)
  
  let AddFirstDigit = digit.unshift(1000)
  cl(AddFirstDigit)
   cl(digit)
   
   let RemoveLastDigit = digit.pop()
   cl(RemoveLastDigit)
   
   let RemoveFirstDigit = digit.shift()
   cl(RemoveFirstDigit)
   cl(digit)
  
   
   
   
   let person2 = [
 
 {
	Fname : "virat",
	age : 45,
	
	 
},
 {
	Fname : "vani",
	age : 40,
	
	 
},
 {
	Fname : "riya",
	age : 56,
	
},
 {
	Fname : "geeta",
	age : 35,
	
	 
},
 {
	Fname : "ram",
	age : 75,
	
	 
}
]
   
  cl(person2) 
  cl(person2.length)
   
   
   let Addfirst = {
	   
	   Fname : "nisha",
	age : 25,
	
   }
  
  cl(person2.unshift(Addfirst))
    cl(person2)
 
 
 let AddLast = {
	   
	  Fname : "nita",
	  age : 15,
	
   }
  
  cl(person2.push(AddLast))
    cl(person2)
 
 
 person2.pop()
 cl(person2)
 
 person2.shift()
 cl(person2)
 
 
 
 
 