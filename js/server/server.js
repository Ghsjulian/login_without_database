"use strict";
import {Mycookie} from "./cookies.js";
import {Session} from "./session_storage.js";
export function $(selector){
  return document.querySelector(selector);
}

export function server(url,name,email,password){
var form_data = new FormData();
 //form_data.append('action', action);
 form_data.append('user_name', name);
// form_data.append('user_email', email);
 form_data.append('user_password', password);
    fetch(`${url}`, {
        method:"POST",
        body:form_data
    }).then(function(response){
        return response.json();
    }).then(function(data){
   if(data.login_user_name == name.trim() && data.login_password == password.trim()){
  //   console.log(data); 
     window.location.href = 'database.html';
document.getElementById('_error').classList.remove("_error");
document.getElementById('_error').classList.add("_success");
document.getElementById('_error').textContent = 'Login Successfully !';
var cc = new Mycookie();
cc.setCookie("login_user_name",data.login_user_name,30);
//console.log('Cookie : '+cc.getCookie('login_user_name')); 
var ss = new Session();
ss.setSession("login_user_name",data.login_user_name);
//console.log('Session : ' +ss.getSession("login_user_name"));

 } else if(data.login_user_name != name.trim()){
document.getElementById('_error').classList.remove("_success");
document.getElementById('_error').classList.add("_error");
document.getElementById('_error').textContent = 'Invalid User Name !';
//window.location.href = 'home/index/';
  } else if(data.login_password != password.trim()){
document.getElementById('_error').classList.remove("_success");
document.getElementById('_error').classList.add("_error");
document.getElementById('_error').textContent = 'Invalid User Password !';
//window.location.href = 'home/index/';
  }  else  {
//        alert(data.message);
document.getElementById('_error').classList.remove("_success");
document.getElementById('_error').classList.add("_error");
document.getElementById('_error').textContent = 'Invalid Login !';
      }
    });
}

