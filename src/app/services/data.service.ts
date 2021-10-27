import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser=""

  

  user:any={
    1000:{acno:1000,uname:"akhil",password:"userone"},
    1001:{acno:10001,uname:"anu",password:"usertwo"},
    1002:{acno:1002,uname:"aby",password:"userthree"},
    1003:{acno:1003,uname:"anna",password:"userfour"}
  }

  constructor() {
    //this.getDetails()
   }

  saveDetails(){
    localStorage.setItem("user",JSON.stringify(this.user))
    if(this.currentUser){
      localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
    }
    
  }

  getDetails(){
    if(localStorage.getItem("user")){
      this.user=JSON.parse(localStorage.getItem("user")||'')
    }
    if(localStorage.getItem("currentUser")){
      this.currentUser=JSON.parse(localStorage.getItem("currentUser")||'')
    }
    
    
  }

  

  register(acno:any,uname:any,password:any){
     
   let accDetails = this.user

   if(acno in accDetails){
     alert("user already exist")
     return false;
   }
   else{
     accDetails[acno]={
       acno,
       uname,
       password
       
     }
     this.saveDetails()
     return true
   }

  }


  login(acno: any, pswd: any) {

    let accDetails = this.user;
    if (acno in accDetails) {
      if (pswd == accDetails[acno]["password"]) {
        this.currentUser = accDetails[acno]["uname"]
        
        this.saveDetails()
        return true

      }
      else {
        alert("incorrect password")
        return false
      }
    }
    else {
      alert("Invalid user")
      return false
    }

  }

  
  
}
