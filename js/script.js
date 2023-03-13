const productsDiv = document.querySelector(".products-container");
console.log(products)
const fetchData = () => {
  fetch("https://fakestoreapi.com/products?limit=50")
    .then((res) => res.json())
    .then((products) => {
      products.forEach((product) => {
        const card = `
            <div class="card">
                <div class="img">
                  <img src="${product.image}" alt="${product.title}" />
                </div>
                <div class="details">
                  <h4>${product.title}</h4>
                  <p>Price: ${product.price}$</p>
                </div>
                <div class="actions">
                  <button id="${product.id}" class="add p${product.id}" onclick="addToCart(${product.id})" >ADD</button>
                  <button id="${product.id}" class="hide r${product.id}" >delete</button>
                  <button>VIEW</button>
                </div>
            </div>
  `;
        productsDiv.innerHTML += card;
      });
    });
};
fetchData();

// cart array
let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

// ADD TO CART
function addToCart(id) {
  let amount = 0
  const addBtn = document.querySelector(`.p${id}`)
  const removeBtn = document.querySelector(`.r${id}`)
  console.log(addBtn)
  // check if prodcut already exist in cart
  console.log(productsDiv)
  if (cart.some((item) => item.id === id)) {
    // changeNumberOfUnits("plus", id);
    // console.log(document.querySelector(".img"))
    amount+=1
    console.log(amount)
    
  } else {
    const item = products.find((product) => product.id === id);
    
    cart.push({
      ...item,
      amount: amount+1
    });
    // addBtn.innerHTML = "increase"
    addBtn.classList.toggle("hide")
    removeBtn.classList.toggle("hide")
    // addBtn.find(btn => btn.)
  }

  updateCart();
}


function updateCart() {
  // renderCartItems();
  // renderSubtotal();

  // save cart to local storage
  localStorage.setItem("CART", JSON.stringify(cart));
}