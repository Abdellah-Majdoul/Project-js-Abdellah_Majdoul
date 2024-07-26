
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
let gmail = prompt('Your email: ');

function isValidEmail(email) {
  let nospaceEmail = email.trim();
  if (nospaceEmail !== nospaceEmail.toLowerCase()) {
    return false;
  }
  
  if (nospaceEmail.includes(' ')) {
    return false;
  }

  if (nospaceEmail.length <= 10) {
    return false;
  }

  if (!/^[a-z0-9]+@[a-z0-9]+\.[a-z]+$/.test(nospaceEmail)) {
    return false;
  }

  return true;
}

while (!isValidEmail(gmail)) {
  alert('Invalid email, please try again.');
  gmail = prompt('Your email: ');
}
alert('Email is valid!');

const createUser = (firstLetter, gmail, userAge, ps) => {

    let exist = database.find(e => e.gmail == gmail);

    if (!exist) {
        let user = {
            firstLetter,
            userAge,
            gmail,
            ps
        }
        database.push(user)
       
        alert("account createsd successfully ")

    } else {
        console.log(gmail + " rah kyn");
    }

}
// email fin
    //age debut
    let userAge = prompt('Your Age : ')
    let ps = prompt('Your Password : ')   
    let users= new User(firstLetter,gmail,userAge,ps)
    database.push(users)
    console.log(database);
    console.log("create account ");
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






        















