let form=document.getElementById('form');
form.addEventListener('submit',function(){
    event.preventDefault();

    let data={
       email:form.email.value,
       pass1:form.pass1.value,
       pass2:form.pass2.value,   
    }

        localStorage.setItem('userData',JSON.stringify(data));
        window.location.reload();
})