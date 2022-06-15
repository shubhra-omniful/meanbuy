// console.log("hi");

let cartData = JSON.parse(localStorage.getItem("cartData"));
console.log(cartData);

let cart = document.querySelector(".cart");
let totalPrice = 0;

showData(cartData);
console.log(totalPrice);

function showData(data) {
  let append = document.querySelector("#products");
  append.innerHTML = "";
  data.forEach((el) => {
    totalPrice += +el.price.split(",").join("");
    // console.log(el);

    append.innerHTML += `
     <tr class='product'>
   <td>
     <img
      src='${el.image}'
      alt=''
    />
  </td>
  <td class='itemcontent'>
    <p class='prodtitle'>${el.name}</p>
    <div class='prodxtras'>
      <p>color: Blue</p>
      <p class='qty'>
        <span>Select qty:</span>
        <input type='number' min='1' value='1' />
      </p>

      <p class='freedel'>
        <i class='fa fa-check' aria-hidden='true'></i>
        <span>Free Delivery</span>
      </p>
      <p>
        <b>
          <span class='shipdate'>Delivery Date: </span>July 12, 2022
        </b>
      </p>
      <p class='delete-item'>
        <i class='fa fa-trash' aria-hidden='true'></i>
      </p>
    </div>
  </td>
  <td class='hidemob'>
    <span class='strikethrough'>
      <i class='fa fa-inr'></i>${el.wasPrice}
    </span>
  </td>
  <td>
   <i class='fa fa-inr'>
    <span class='colordarkgreen'>
      ${+el.price.split(",").join("")}
    </span>
  </td>
</tr>
 `;
    let subtotal = document.querySelector("#subTotal");
    subtotal.innerHTML = `${totalPrice}`;

    let grandTotal = document.querySelector("#grandTotal2");
    grandTotal.innerHTML = `${totalPrice}`;

    let simplePay = document.querySelector(
      "#checkout-container > div > div.cartrem > div > span > strong > span"
    );

    simplePay.innerHTML = `${(totalPrice / 3).toFixed(2)}`;

    let cartItems = document.querySelector(
      "#checkout-container > div > div.cartrem > p:nth-child(1) > b:nth-child(1) > span.cartitems"
    );

    cartItems.innerHTML = `${data.length}`;
  });
}

// {
//     "image": "https://dbnzj30o7hucx.cloudfront.net/eyJidWNrZXQiOiJtZWFuYnV5LWltYWdlcyIsImtleSI6IjMyMzg4XC9CbGFja19uXzFfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjMyMCwiaGVpZ2h0IjozMjAsImZpdCI6ImNvbnRhaW4iLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
//     "name": "Zeblaze Stratos 2 Smartwatch",
//     "price": "$1,099.99",
//     "save": "4.5/5",
//     "wasPrice": "$1,999.99"
// }
