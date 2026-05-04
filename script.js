// Base de dados simulada de produtos
const products = [
    {
        id: 1,
        brand: "Nike",
        name: "Tênis Nike Revolution 6 Next Nature Masculino",
        oldPrice: "R$ 399,99",
        newPrice: "R$ 249,99",
        installments: "ou 4x de R$ 62,50",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 2,
        brand: "Adidas",
        name: "Tênis Adidas Coreracer Masculino",
        oldPrice: "R$ 299,99",
        newPrice: "R$ 179,99",
        installments: "ou 3x de R$ 60,00",
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 3,
        brand: "Puma",
        name: "Tênis Puma Smash V2 BDP",
        oldPrice: "R$ 249,90",
        newPrice: "R$ 189,90",
        installments: "ou 3x de R$ 63,30",
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 4,
        brand: "Olympikus",
        name: "Tênis Olympikus Corre 3 Unissex",
        oldPrice: "R$ 499,99",
        newPrice: "R$ 399,90",
        installments: "ou 7x de R$ 57,12",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 5,
        brand: "Mizuno",
        name: "Tênis Mizuno Wave Titan 2 Masculino",
        oldPrice: "R$ 349,99",
        newPrice: "R$ 219,90",
        installments: "ou 4x de R$ 54,97",
        image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 6,
        brand: "Asics",
        name: "Tênis Asics Gel-Kihai 2 Masculino",
        oldPrice: "R$ 399,99",
        newPrice: "R$ 259,99",
        installments: "ou 4x de R$ 65,00",
        image: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&w=400&q=80"
    }
];

let cartCount = 0;
const cartBadge = document.getElementById('cart-count');
const grid = document.getElementById('product-grid');

// Função para renderizar os produtos no formato Netshoes
function renderProducts() {
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="card-img">
            <p class="card-brand">${product.brand}</p>
            <h3 class="card-title">${product.name}</h3>
            <div>
                <p class="price-old">${product.oldPrice}</p>
                <p class="price-new">${product.newPrice}</p>
                <p class="installments">${product.installments}</p>
            </div>
            <button class="btn-buy" onclick="addToCart()">Comprar</button>
        `;
        grid.appendChild(card);
    });
}

// Função para adicionar ao carrinho
function addToCart() {
    cartCount++;
    cartBadge.innerText = cartCount;
    showToast();
}

// Função para mostrar notificação
function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}

// Inicializar a loja
renderProducts();