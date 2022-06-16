let form=document.querySelector("form");
let userData=JSON.parse(localStorage.getItem("userData"));
    
form.addEventListener("submit",function(event){
        event.preventDefault();

    let data={
          email:form.email.value,
          password:form.password.value,
    };    

        if(userData ==null)
        {
            alert("please create an account");
        }
        else if(userData.email===data.email && userData.pass1===data.password)
        {
            alert("sign in successful");

            localStorage.setItem("signin",JSON.stringify(userData)); 
    // redirect to homepage
         window.location.href="index.html";      
        }
        else{
            alert("invalid email or password");
        }
    });
     
import {header} from "./component/navbar.js";
let navbar= document.getElementById('header');
navbar.innerHTML=header();

import {footer} from "./component/footer.js";
let foot= document.getElementById('footer');
foot.innerHTML=footer();