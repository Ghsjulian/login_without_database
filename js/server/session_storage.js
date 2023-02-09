"use strict";
//sessionStorage.setItem("name","Ghs Julian");
export class Session{
  constructor(){
    console.log('SESSION STORAGE...'); 
  }
  setSession(key,value){
    if(key && value){
      sessionStorage.setItem(key,value);
    } else {
      console.log('Please Set key name and value'); 
    }
  }
  getSession(key){
    if(key){
    return sessionStorage.getItem(key);
    }
  }
  sessionRemove(key){
    if(key){
      if(this.getSession(key)){
      return sessionStorage.removeItem(key);
      }
    } 
  }
  sessionClear(key){
    sessionStorage.clear();
    if (sessionStorage.length == 0) {
      return true;
    }
  }
  
}
