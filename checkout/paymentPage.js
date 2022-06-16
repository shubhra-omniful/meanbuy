let totalAmount=0;

let userEmail=JSON.parse(localStorage.getItem('userData'));

document.getElementById('email').innerText=userEmail;


let simple=JSON.parse(localStorage.getItem('simpl'));

simplAmount=document.getElementById('simplAmount').innerText=simple;

let card=JSON.parse(localStorage.getItem('cardData'));
card.forEach(element => {
    document.getElementById('items').innerText=element;

    document.getElementById('iteamPrice').innerText=element;

    totalAmount=totalAmount+element
});


let subTotal=document.getElementById('subTotal');

couponPress=()=>{
    let coupon=document.getElementById('promotionalCode').value;

    if(totalAmount>9999 && coupon==='MASAI500'){
        // totalamount=
        alert('Coupon applied');
        // window.location.reload();
    }
    else if(totalAmount<1000 && coupon==='MASAI500'){
        alert('This coupon only applicable for 10000 and above');

    }
    else{
        alert('Invalid Coupon');
        document.getElementById('promotionalCode').value="";
    }
}


payNow=()=>{
    window.location.href='paymentsuccesspage.html';
}