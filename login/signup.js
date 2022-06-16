let form=document.getElementById('form');
form.addEventListener('submit',function(){
    event.preventDefault();

    let data={
       email:form.email.value,
       pass1:form.pass1.value,
       pass2:form.pass2.value,   
    }

    if(data.pass1==data.pass2)
    {
        localStorage.setItem('userData',JSON.stringify(data));
        window.location.reload();
    }
    else{
        alert('password not matched');
    }      
})

import {header} from "./component/navbar.js";
let navbar= document.getElementById('header');
navbar.innerHTML=header();

import {footer} from "./component/footer.js";
let foot= document.getElementById('footer');
foot.innerHTML=footer();