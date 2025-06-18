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
let score = 0;

function playGame() {
    const randomFruit = Math.floor(Math.random() * 5) + 1; // 1 থেকে 5
    score += randomFruit;
    alert(`You got ${randomFruit} points! Total Score: ${score}`);

    if (score >= 5 && score < 7) {
        alert('You get a 5% discount!');
    } else if (score >= 7) {
        alert('You get a 10% discount!');
    }
}

document.getElementById('play-game').addEventListener('click', playGame);
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});
