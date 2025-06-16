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
