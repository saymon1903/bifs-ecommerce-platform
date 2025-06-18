document.addEventListener("DOMContentLoaded", () => {
    const productsDiv = document.getElementById("products");

    const products = [
        { name: "Product 1", price: "$10" },
        { name: "Product 2", price: "$20" },
        { name: "Product 3", price: "$30" }
    ];

    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.className = "product";
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: ${product.price}</p>
        `;
        productsDiv.appendChild(productElement);
    });
});
async function fetchProducts() {
    const response = await fetch('http://localhost:3000/api/products');
    const products = await response.json();
    const productsContainer = document.getElementById('products');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <p>Stock: ${product.stock}</p>
        `;
        productsContainer.appendChild(productDiv);
    });
}

fetchProducts();
