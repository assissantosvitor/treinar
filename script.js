// Modal + inspeção básica
document.addEventListener('click', function(e){
  const inspectBtn = e.target.closest('.inspect');
  if(inspectBtn){
    const product = inspectBtn.closest('.product');
    if(!product) return;
    const name = product.dataset.name || product.querySelector('h3')?.innerText || 'Produto';
    const desc = product.dataset.desc || '';
    const price = product.dataset.price ? Number(product.dataset.price).toFixed(2) : '';
    const img = product.dataset.img || product.querySelector('img')?.src || '';
    const link = product.dataset.link || '';

    document.getElementById('modalImg').src = img;
    document.getElementById('modalImg').alt = name;
    document.getElementById('modalName').textContent = name;
    document.getElementById('modalDesc').textContent = desc;
    document.getElementById('modalPrice').textContent = price ? ('R$ ' + price.replace('.',',')) : '';
    document.getElementById('openSite').dataset.link = link;

    document.getElementById('modal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  if(e.target && e.target.id === 'closeModal'){
    closeModal();
  }

  if(e.target && e.target.id === 'openSite'){
    const link = e.target.dataset.link;
    if(link) window.open(link, '_blank');
  }
});

function closeModal(){
  document.getElementById('modal').style.display = 'none';
  document.body.style.overflow = '';
}

// fechar ao clicar fora
document.getElementById('modal').addEventListener('click', function(e){
  if(e.target === this) closeModal();
});

// fechar com ESC
document.addEventListener('keydown', function(e){
  if(e.key === 'Escape') closeModal();
});

