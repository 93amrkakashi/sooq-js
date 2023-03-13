const productsDiv = document.querySelector(".products-container");

const fetchData = () => {
  fetch("https://fakestoreapi.com/products?limit=50")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((product) => {
        const card = `
            <div class="card">
                <div class="img">
                  <img src="${product.image}" alt="${product.title}" />
                </div>
                <div class="details">
                  <h4>${product.title}</h4>
                  <p>${product.price}$</p>
                </div>
                <div class="actions">
                  <button>ADD</button>
                  <button>VIEW</button>
                </div>
            </div>
  `;
        productsDiv.innerHTML += card;
      });
    });
};
fetchData();
