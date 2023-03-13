let products = () => {
  fetch("https://fakestoreapi.com/products?limit=50")
    .then((res) => res.json())
    .then((data) => {
      products = data;
    });
  return products;
};
products();
