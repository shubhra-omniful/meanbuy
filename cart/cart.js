// console.log("hi");

let cartData = JSON.parse(localStorage.getItem("cartData"));
console.log(cartData);

let cart = document.querySelector(".cart");
let totalPrice = 0;

showData(cartData);
console.log(totalPrice);

function showData(data) {
  console.log("shoedata");
  let append = document.querySelector("#products");
  append.innerHTML = "";
  data.forEach((el, index) => {
    totalPrice += +el.price.split(",").join("");
    // console.log(el);

    abc(el, index);

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
        <input type='number' min='1' onchange="qtyChange()" />
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
      <p class='delete-item' onclick="deleteClass(${index})">
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
    subtotal.innerHTML = `${totalPrice.toFixed(2)}`;

    let grandTotal = document.querySelector("#grandTotal2");
    grandTotal.innerHTML = `${totalPrice.toFixed(2)}`;

    let simplePay = document.querySelector(
      "#checkout-container > div > div.cartrem > div > span > strong > span"
    );

    simplePay.innerHTML = `${(totalPrice / 3).toFixed(2)}`;

    let simpl = simplePay.innerText;
    localStorage.setItem("simpl", simpl);

    let cartItems = document.querySelector(
      "#checkout-container > div > div.cartrem > p:nth-child(1) > b:nth-child(1) > span.cartitems"
    );

    cartItems.innerHTML = `${data.length}`;
  });
}

//! Delete Data

function deleteClass(data) {
  //   console.log(event);
  //   console.log(data);

  cartData.splice(data, 1);
  localStorage.setItem("cartData", JSON.stringify(cartData));
  showData(cartData);
}

function qtyChange() {
  // let qty = event.target.value;
  showData(cartData);
  function abc(el, index) {
    console.log("fun1");
    let qty = event.target.value;
    cartData[index].qty = qty;
    localStorage.setItem("cartData", JSON.stringify(cartData));
    showData(cartData);
  }
}

function abc() {}
