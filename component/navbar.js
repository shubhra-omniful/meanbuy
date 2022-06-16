function navbar(){
console.log("navappend")
    return `<div id="heading">
    <div>
      <a href="#"> <img id="imgLogo" src="https://meanbuyassets.s3.ap-south-1.amazonaws.com/baselogo.png" alt="meanbuyLogo"   /></a> 
    </div>
    
    <div>
       <input type="search" id="searchInput" placeholder="Search">
    </div>

    <div id="sideheader">
        <div id="sellerCorner">
            <a href="#">Seller's Corner</a>
            <a href="#">| Feedback</a>
            <a href="#">| Delivery Info</a>
            
        </div>
        <div id="loginDiv">

            <a class="logon" href="#">LOGIN</a>
            <a class="logon" href="#">/SIGN UP</a>
            <a href="#"><img id="cartimg" src="https://cdn-icons-png.flaticon.com/512/891/891462.png" alt=""></a>
            <h5>WELCOME GUEST</h5>
        </div>
    </div>
</div>
<div class="headerBox2">
    <div id="category">Categories</div>
    <div class="bestD"><a href=#">Flash Sale</a></div>
    <div class="bestD"><a href="#">Best Deals</a></div>
     <div class="bestD"><a href="#">Shop by Brand</a></div>
     <div class="bestD"><a href="#">Trending</a></div>
     <div class="bestD"><a href="#">New Arrivals</a></div>

 </div>
 <hr>`

}


export {navbar}

