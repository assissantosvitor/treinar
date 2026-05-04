// script.js - controla o modal de inspeção e os botões "IR PARA O SITE"
(function(){
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalPrice = document.getElementById('modalPrice');
  const closeModal = document.getElementById('closeModal');
  const goToSite = document.getElementById('goToSite');
  const openInspect = document.getElementById('openInspect');

  // Delegation: abre modal quando clicar em botão INSPECIONAR
  document.addEventListener('click', function(e){
    const btn = e.target.closest('.inspect');
    if(!btn) return;
    const card = btn.closest('.card');
    if(!card) return;

    const name = card.dataset.name || card.querySelector('h3')?.innerText || 'Produto';
    const desc = card.dataset.desc || card.querySelector('p')?.innerText || '';
    const price = card.dataset.price ? Number(card.dataset.price).toFixed(2) : null;
    const img = card.dataset.img || card.querySelector('img')?.src || '';
    const link = card.dataset.link || null;

    modalImage.src = img;
    modalImage.alt = name;
    modalTitle.textContent = name;
    modalDesc.textContent = desc;
    modalPrice.textContent = price ? ('R$ ' + price.replace('.',',')) : '';
    goToSite.dataset.link = link;
    openInspect.dataset.link = link;

    // mostrar modal
    modalBackdrop.style.display = 'flex';
    modalBackdrop.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  });

  // fechar modal
  closeModal.addEventListener('click', close);
  modalBackdrop.addEventListener('click', function(e){
    if(e.target === modalBackdrop) close();
  });
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') close();
  });

  function close(){
    modalBackdrop.style.display = 'none';
    modalBackdrop.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
  }

  // botão IR PARA O SITE
  goToSite.addEventListener('click', function(){
    const link = this.dataset.link;
    if(link) window.open(link,'_blank');
  });

  // botão INSPECIONAR: abre a página do produto em nova aba para o usuário inspecionar manualmente
  openInspect.addEventListener('click', function(){
    const link = this.dataset.link;
    if(link){
      window.open(link,'_blank');
    } else {
      alert('Link do produto não disponível para inspeção.');
    }
  });
})();
