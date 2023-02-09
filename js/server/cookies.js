"use strict";
export class Mycookie{
  constructor(){
  //  console.log(` Example : checkCookie() , getCookie() , setCookie() , deleteCookie() , allCookies()`);
  }
  checkCookie(info = []) {
    if(info.length> 0){
    for(let i =0; i<info.length; i++){
      var value = this.getCookie(info[i]);
      return true;
      }
    } else {
     return 'Please Insert Your Cname ! ';
  }
}

  getCookie(cname) {
    if (cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }/* else {
          return `${cname} Has No Cookies !`; 
        }*/
      }
  }  else  {
    return 'Please Insert Your Cname ! ';
  }
}

  setCookie(cname,cvalue,exdays) {
    if (cname && cvalue && exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires =" + d.toGMTString();
    document.cookie = cname + " = " + cvalue + ";" + expires + ";path=/";
      if(this.getCookie(cname)) {
        return true;
      }
    }  else  {
      console.log(`Please Insert Three Parameters 'cname' , 'cvalue' , And 'exdays' To Set Your Cookies !`);
    }
}


  deleteCookie (cname) {
    document.cookie = `${cname}=; expires=Thu, 06 Feb 2024 00:00:00 UTC;path=/;`;
    if(!this.getCookie(cname)) {
        return true;
      }
  }

  allCookies() {
    return document.cookie;
  }

}
