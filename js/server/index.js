"use strict";

class Mysql{
  constructor(host,user, password,db_name){
    this.host = host;
    this.user = user;
    this.password = password;
    this.db_name = db_name;
  }
  connect(){
    var info ={
      "host_name" : this.host,
      "user_name" : this.user,
      "password" : this.password,
      "database" : this.db_name
    };
 let send_data = {
   "method": "POST",
   "headers": {
      "Content-Type": "application/json; charset=utf-8"
   },
   "body": JSON.stringify(info)
};
  fetch('server.php',send_data)
   .then(function(response){
        return response.text();
    }).then(function(data){
      alert(data); 
    });
  }
 
 select(){
   if(this.connect()){
     alert('okkk'); 
   }
 }
 
}


var db = new Mysql("localhost","root","","my_data");
//db.connect();
db.select();