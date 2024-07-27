
let userBank=prompt('sign-up ro sign-in or change')
const database =[]
class User{
    constructor(name,email,age,password,comfirmPs){
        this.name=name
        this.email=email
        this.age=age
        this.password=password
        this.comfirmPs=comfirmPs
        this.balance=0
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
    
    function isValidNumber(userAge) {
        let nospaceAge=userAge.trim()
        let isNum= /^\d+$/.test(nospaceAge)
        let isCorrectLength = nospaceAge.length > 0 && nospaceAge.length < 3;
        return isNum && isCorrectLength
      }
      while (!isValidNumber(userAge)) {
        alert('Please enter a valid number.(1-99)');
        userAge = prompt('Your Age : ')
       
        
      }
      
    //  age fin
    let ps = prompt('Your Password : ') 
    let nospacePs=ps.trim()
    let nomiddlePs=nospacePs.replace(/\s+(?=.)/, '')  
    if (/[^a-zA-Z ]/.test(nomiddlePs) && nomiddlePs.length>= 7) {
        alert('enter special character : @, #, -, +, *, /');
        ps = prompt('Your Password : ') 
      }

    let comfmPs=prompt('comfirm password : ')
   if (nomiddlePs ==comfmPs) {
    alert("merhba")
   }else{
    alert("you are blokeed")
   }
    let users= new User(firstLetter,gmail,userAge,nomiddlePs,comfmPs)
    database.push(users)
    console.log(database);
    console.log("create account ");
    signIn()
}

const signIn = () => {
     gmail = prompt('Your Email: ').trim();
     ps = prompt('Your Password: ').trim();
  
    let  finduser = database.find(user => user.email === gmail);
    
    if (!finduser) {
      alert("Email not found.");
      return;
    }
  
    if (finduser.password === ps) {
      alert("Login successful!");
    } else {
      alert("Incorrect password.");
    
    }      
    bankingServices()
  }
  const withdrawMoney = (user) => {
    let amount = parseInt(prompt("Enter amount to withdraw: "));
    if (amount > 0 && amount <= user.balance) {
      user.balance -= amount;
      alert(`Withdrawal successful.  ${user.balance}`);
      user.transaction.push(`Withdrew ${amount}`);
    } else {
      alert("Invalid amount.");
    }
  }
  const bankingServices = (users) => {
    let service;
    do {
      service = prompt('Choose a service: logout, withdraw, deposit, loan, invest, history').toLowerCase();
  
      if (service === "logout") {
        alert("You are logged out.");
      } else if (service === "withdraw") {
        withdrawMoney(users);
      } else if (service === "deposit") {
        depositMoney(users);
      }  
    } while (service !== "logout");
  }
  const changPassword =()=>{
    
   gmail=prompt('your email :')
   let changeps= prompt('your new password :')

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
        changPassword()
    }
}
truc()






        















