let totalAmount=0;

let userEmail=JSON.parse(localStorage.getItem('userData'));

document.getElementById('email').innerText=userEmail.email;


let simpl=JSON.parse(localStorage.getItem('simpl'));

document.getElementById('simpl').innerText=simpl;


let obj={};
let obj1={};
let storeItems='';
let storePrice='';
let card=JSON.parse(localStorage.getItem('cartData'));
card.forEach(element => {
    if(obj[element.name]===undefined){
        obj[element.name]=1;
        obj1[Number((element.price.split(",").join("")))]=1;
    }
    else{
        obj[element.name]=obj[element.name]+1;
        obj1[Number((element.price.split(",").join("")))]=obj1[Number((element.price.split(",").join("")))]+1;
    }

    totalAmount=totalAmount+Number((element.price.split(",").join("")));
});

for(let i in obj){
    storeItems=storeItems+obj[i]+" "+"x"+" "+i+" ";
}
for(let j in obj1){
    storePrice=storePrice+" "+" "+" "+(obj1[j])*j+" "+" "+" ";
}
console.log(obj1)
document.getElementById('items').innerText=storeItems;

document.getElementById('iteamPrice').innerText=storePrice;


document.getElementById('subTotal').innerText=totalAmount.toFixed(2);

couponPress=()=>{
    let coupon=document.getElementById('promotionalCode').value;

    if(totalAmount>9999 && coupon==='MASAI'){
        document.getElementById('subTotal').innerText="";
        document.getElementById('subTotal').innerText=(totalAmount-500).toFixed(2);
        alert('Coupon applied');
    }
    else if(totalAmount<10000 && coupon==='MASAI'){
        alert('This coupon only applicable for 10000 and above');

    }
    else{
        alert('Invalid Coupon');
        document.getElementById('promotionalCode').value="";
    }
}


function payNow(){
    window.location.href='paymentsuccesspage.html';
}