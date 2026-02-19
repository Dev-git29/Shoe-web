let products = [
    { shoename: "Air Jordan 1 Mid SE", category: "Men,s Shoes", currentprice: 12000, orignalprice: 20000, productdetails: "Every time the AJ1 gets a remake, you get the classic sneaker in new colours and textures for an exciting, revamped look but with all the familiar comforts you know. Premium materials and accents give modern expression to an all-time favourite.", shoeimage: "/images/product-1.webp" },
    { shoename: "Jordan Stay Loyal 2", category: "Men,s sports Shoe", currentprice: 14500, orignalprice: 22000, productdetails: `Inspired by generations of Js, these kicks are a collage of cool. Design details recall decades of legendary shoes while paying homage to MJs storied career. Breathable mesh, sturdy leather and lightweight Air cushioning in the heel make it that much easier to walk in the footsteps of greatness.Colour Shown: Black/Gym Red/White Style: DQ8401-061`, shoeimage: "/images/product2.webp" },
    { shoename: "Air Jordan XXXVII Low PF", category: "Men,s Casual Shoes", currentprice: 7500, orignalprice: 16450, productdetails: `You've got the hops and the speed—lace up in shoes that enhance what you bring to the court. The latest AJ is all about take-offs and landings, with multiple Air units to get you off the ground. The upper is made with strong, reinforced leno-weave fabric that'll keep you contained and leave your game uncompromised. This low-top model is designed for playing on outdoor courts. Colour Shown: White/Siren Red/Black Style: DQ4123-100`, shoeimage: "/images/product3.webp" },
    { shoename: "Air Jordan 1 Mid SE", category: "Men,s Shoes", currentprice: 12000, orignalprice: 20000, productdetails: "Every time the AJ1 gets a remake, you get the classic sneaker in new colours and textures for an exciting, revamped look but with all the familiar comforts you know. Premium materials and accents give modern expression to an all-time favourite.", shoeimage: "/images/product-1.webp" },
    { shoename: "Jordan Stay Loyal 2", category: "Men,s Formal Shoes", currentprice: 14500, orignalprice: 22000, productdetails: `Inspired by generations of Js, these kicks are a collage of cool. Design details recall decades of legendary shoes while paying homage to MJs storied career. Breathable mesh, sturdy leather and lightweight Air cushioning in the heel make it that much easier to walk in the footsteps of greatness.Colour Shown: Black/Gym Red/White Style: DQ8401-061`, shoeimage: "/images/product2.webp" },
    { shoename: "Air Jordan XXXVII Low PF", category: "Tracking Shoes", currentprice: 7500, orignalprice: 16450, productdetails: `You've got the hops and the speed—lace up in shoes that enhance what you bring to the court. The latest AJ is all about take-offs and landings, with multiple Air units to get you off the ground. The upper is made with strong, reinforced leno-weave fabric that'll keep you contained and leave your game uncompromised. This low-top model is designed for playing on outdoor courts. Colour Shown: White/Siren Red/Black Style: DQ4123-100`, shoeimage: "/images/product3.webp" },
];

let addednotification = document.querySelector("#added");
let removednotification = document.querySelector("#removed");

let subtotal = 0;
document.getElementById('Subtotal').innerHTML = subtotal;


let deliveryprice = 0;
document.getElementById('deliveryprice').innerHTML = deliveryprice;


let totalamount = 0;
document.getElementById('totalamount').innerHTML = totalamount;

function subtotalincrement(price) {
    subtotal += price + deliveryprice;
    document.getElementById('Subtotal').innerHTML = subtotal;
    totalprice(subtotal)
}

function Subtotaldecrement(price) {
    subtotal - price;
    document.getElementById('Subtotal').innerHTML = subtotal;
};

function totalprice(i) {
    document.getElementById('totalamount').innerHTML = totalamount + i;
};



let cartbtn = document.querySelector("#cartbtn");
let cart = document.querySelector(".cart");
let becomeseller = document.querySelector("#becomeseller");
let sellerloginform = document.querySelector(".sellerlogin");
let noofitems = 0;




function ToToggleMenu() {
    let menubtn = document.getElementById("menubtn");
    let ul = document.getElementById("ul");
    let navbtns = document.querySelectorAll(".navbtns");
    let x = 0;

    menubtn.addEventListener("click", () => {
        if (x === 0) {
            ul.style.right = '0%'
            x = 1;
        } else {
            ul.style.right = '-100%'
            x = 0;
        }

    })

    navbtns[2].addEventListener("click", function () {
        ul.style.right = '-100%';
        x = 0;
    });

    navbtns[4].addEventListener("click", function () {
        ul.style.right = '-100%';
        x = 0;
    });

}
ToToggleMenu();


function heroslider() {
    let currentslider = document.getElementById("slider");
    let sliderprev = document.getElementById("prev");
    let slidernext = document.getElementById("next");
    let sliders = ['/images/slide-1.png', '/images/slide-2.png', '/images/slide-3.png']

    let sliderindex = 0;
    currentslider.setAttribute('src', sliders[sliderindex]);


    const next = () => {
        sliderindex = (sliderindex + 1) % sliders.length;
        currentslider.setAttribute('src', sliders[sliderindex]);
    }

    const prev = () => {
        sliderindex = (sliderindex - 1 + sliders.length) % sliders.length;
        currentslider.setAttribute('src', sliders[sliderindex]);
    }

    slidernext.addEventListener('click', next);
    sliderprev.addEventListener('click', prev);

    setInterval(() => {
        sliderindex++;
        currentslider.setAttribute('src', sliders[sliderindex]);

        if (sliderindex == sliders.length) {
            sliderindex = 0;
            currentslider.setAttribute('src', sliders[sliderindex]);
        }
    }, 10000);


}
heroslider();

// for showing every product in homepage
let productsbox = document.querySelector(".products");
products.forEach(function (product, i) {

    const originalPrice = product.orignalprice;
    const currentPrice = product.currentprice;
    const discountPercentage = ((originalPrice - currentPrice) / originalPrice) * 100;
    let discountprice = discountPercentage.toFixed(2);


    productsbox.innerHTML += `<li class="card" onclick='preview(${i})'>
    <img src="${product.shoeimage}" alt="">

    <div class="lower">
        <div class="left">
            <h3 id="name">${product.shoename}</h3>
            <h4><span id="price">${product.currentprice}</span> <span id="orignalprice">${product.orignalprice}</span></h4>
        </div>

        <div class="right">
            <h4 id="discount">${discountprice}% off</h4>
        </div>

    </div>
</li>`
});



// for preview a clicked product
let popup = document.querySelector('.popup');
let shoepreview = document.querySelector('.aboutshoe');
const preview = (i) => {
    popup.style.display = "block";

    const originalPrice = products[i].orignalprice;
    const currentPrice = products[i].currentprice;
    const discountPercentage = ((originalPrice - currentPrice) / originalPrice) * 100;
    let discountprice = discountPercentage.toFixed(2);
    shoepreview.innerHTML = `<div class="left">
    <img src='${products[i].shoeimage}'  id="mainimg">


    <div class="samples">
        <img src="/images/sample1.webp" alt="" class="sample">
        <img src="/images/sample2.webp" alt="" class="sample">
        <img src="/images/sample3.webp" alt="" class="sample">
        <img src="/images/sample1.webp" alt="" class="sample">
        <img src="/images/sample2.webp" alt="" class="sample">
    </div>

</div>

<div class="right">
    <h1 id="shoename">${products[i].shoename}</h1>
    <h3 id="category">${products[i].category}</h3>

    <div class="pricebox">
        <h4> MRP: <span id="price">$${products[i].currentprice}</span> <span id="orignalprice">$${products[i].orignalprice}</span></h4>
        <h4 id="discount">${discountprice}% off</h4>
    </div>

    <h4>incl. of taxes</h4>
    <h4>(All includes all applicable duties)</h4>

    <h1>Select Size</h1>
    <div class="sizes">
        <li>UK 6</li>
        <li>UK 6</li>
        <li>UK 6</li>
        <li>UK 6</li>
        <li>UK 6</li>
        <li>UK 6</li>
        <li>UK 6</li>
        <li>UK 6</li>
    </div>

    <button onclick='addtocart(${i})' class="addtocart">Add To Cart</button>
    <button id="whishlist">Whishlist <i class="fa-regular fa-heart"></i></button>

    <h2>Product Details</h2>
    <p id="productdetails">${products[i].productdetails} </p>
</div>`

    sample();
};



// // adding products to cart
let cartbox = document.querySelector(".shop");
function addtocart(i) {
    if (cartbox.innerHTML.includes(products[i].shoeimage)) {
        alert('Please select')
        document.querySelectorAll('.addtocart')[i].disabled = true;
    }

    else {
        cartbox.innerHTML += `<div class="box" id='${i}'>
    <img
        src="${products[i].shoeimage}">
    <div class="content">
        <h3>${products[i].shoename}</h3>
        <h4>Price: $${products[i].currentprice}</h4>
        <p class="unit">Quantity: <input name="" value="1"></p>
        <p class="btn-area" onclick='removeitem(${i})'><i aria-hidden="true" class="fa fa-trash"></i> <span
                class="btn2">Remove</span></p>
    </div>
                        </div>`
        addednotification.style.top = '5%';
        setTimeout(() => {
            addednotification.style.top = '-50%';
        }, 3000);
        noofitems++;
        subtotalincrement(products[i].currentprice);
        itemsincart()
        document.querySelectorAll('.addtocart')[i].disabled = false;
    }
};

function removeitem(i) {
    document.getElementById(i).remove()
    removednotification.style.top = '5%';
    subtotal -= products[i].currentprice;
    setTimeout(() => {
        removednotification.style.top = '-50%';
    }, 3000);
    Subtotaldecrement(products[i].currentprice);
    noofitems--;
    itemsincart()
    totalprice(subtotal);
};


cartbtn.addEventListener("click", function () {
    cart.style.display = "block";
});





function popupclose() {
    document.querySelector('#previewclose').addEventListener("click", function () {
        popup.style.display = "none";
    })
};

function cartclose() {
    document.querySelector('#cartclose').addEventListener("click", function () {
        cart.style.display = "none";
    })
};

function itemsincart() {
    let cartlength = document.querySelector('#cartlength');
    cartlength.innerHTML = noofitems;
};

// for sample images

function sample() {
    let samples = document.querySelectorAll('.sample');
    let mainimg = document.querySelector('#mainimg');
    for (let i = 0; i < samples.length; i++) {
        samples[i].addEventListener('click', () => {
            mainimg.src = samples[i].getAttribute('src');
        });
    };
}

becomeseller.addEventListener("click", function () {
    sellerloginform.style.display = "block";
});

function sellerlogin() {
    document.querySelector('#loginclose').addEventListener("click", function () {
        sellerloginform.style.display = "none";
    })
};

sellerlogin()

cartclose();
popupclose();


