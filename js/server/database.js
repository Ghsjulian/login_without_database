"use strict";

import {Mycookie} from "./cookies.js";
import {Session} from "./session_storage.js";
export function $(selector){
  return document.querySelector(selector);
}

var session = new Session();
var cookie = new Mycookie();


/*
console.log('Cookie : '+cookie.getCookie('login_user_name')); 
console.log(session.getSession('login_user_name'));


*/






window.onload=()=>{
  var session = new Session();
  if(!session.getSession('login_user_name')){
  window.location.href = 'index.html';
  }
};

setInterval(function (){
  var session = new Session();
  if(!session.getSession('login_user_name')){
  window.location.href = 'index.html';
  }
},1);
