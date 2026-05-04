// Array de Produtos com imagens de tênis transparentes/fundo branco para dar um efeito 3D legal
const products = [
    { id: 1, name: "Air Max Infinity", brand: "Nike", price: 499.90, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80" },
    { id: 2, name: "Ultraboost Light", brand: "Adidas", price: 899.90, img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=400&q=80" },
    { id: 3, name: "RS-X 3D", brand: "Puma", price: 449.90, img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=400&q=80" },
    { id: 4, name: "Dunk Low Retro", brand: "Nike", price: 799.90, img: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=400&q=80" },
    { id: 5, name: "Superstar Classic", brand: "Adidas", price: 399.90, img: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&w=400&q=80" },
    { id: 6, name: "Future Rider", brand: "Puma", price: 349.90, img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=400&q=80" }
];

let cart = [];

// Elementos da DOM
const vitrine = document.getElementById('vitrine');
const filterBtns = document.querySelectorAll('.filter-btn');
const cartSidebar = document.getElementById('cart-sidebar');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');

// Renderiza produtos na vitrine
function renderProducts(filter = 'all') {
    vitrine.innerHTML = '';
    const filtered = filter === 'all' ? products : products.filter(p => p.brand === filter);
    
    filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="img-container">
                <img src="${p.img}" alt="${p.name}">
            </div>
            <div class="card-info">
                <p class="card-brand">${p.brand}</p>
                <h3 class="card-title">${p.name}</h3>
                <p class="card-price">R$ ${p.price.toFixed(2).replace('.', ',')}</p>
                <button class="btn-add" onclick="addToCart(${p.id})">Adicionar ao Carrinho</button>
            </div>
        `;
        vitrine.appendChild(card);
    });
}

// Filtros
filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        filterBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        renderProducts(e.target.dataset.filter);
    });
});

// Funções do Carrinho
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
    showToast();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    cartCount.innerText = cart.length;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>O carrinho está vazio.</p>';
        cartTotal.innerText = 'R$ 0,00';
        return;
    }

    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        cartItems.innerHTML += `
            <div class="cart-item">
                <div>
                    <strong>${item.name}</strong><br>
                    <small>R$ ${item.price.toFixed(2).replace('.', ',')}</small>
                </div>
                <button class="btn-remove" onclick="removeFromCart(${index})">X</button>
            </div>
        `;
    });
    cartTotal.innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

// Toast (Notificação de adição)
function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
}

// Interações de Menu Lateral e Tema Escuro
document.getElementById('cart-toggle').addEventListener('click', () => cartSidebar.classList.add('open'));
document.getElementById('close-cart').addEventListener('click', () => cartSidebar.classList.remove('open'));

document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Inicialização
renderProducts();