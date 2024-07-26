
let userBank=prompt('sign-up ro sign-in or change')
const database =[]
class User{
    constructor(name,email,age,password){
        this.name=name
        this.email=email
        this.age=age
        this.password=password
    }   
}
const signUp=()=>{
    // full name
    let fullName = prompt("Your Name : ")
    let noSpace=fullName.trim()
    let UpperCase =noSpace.split(' ')
    let firstLetter=UpperCase.map(e=>e[0].toUpperCase()+e.slice(1).toLowerCase()).join(' ')
   
       
        if (firstLetter.length<=5 ) {
            alert("your name is small")
            firstLetter = prompt("Your Name : ")
        }
       
  
    if (/[^a-zA-Z ]/.test(firstLetter)) {
        alert("sorry thers a special char in your name");
        firstLetter = prompt("Your Name : ")
      }
   // email  debut

}
//  age fin
const signIn=()=>{
    gmail = prompt('Your email : ')
    ps = prompt('Your Password : ') 
}
const truc =()=>{
    while (userBank=="" || userBank =="exit") {
        userBank=prompt('sign-up or sign-in or change ps')
        
    }
    if (userBank == "sign-up") {
        signUp()
    }
    if (userBank == "sign-in") {
        signIn()
    }
    if (userBank =="change") {
        let ps=prompt("changing password : ")
    }
}
truc()






        















