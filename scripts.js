document.querySelectorAll('.recipe-card').forEach(card => {
  const btn = card.querySelector('.btn-toggle');
  const ingredients = card.querySelector('.ingredients');
  btn.addEventListener('click', () => {
    if (ingredients.style.display === 'block') {
      ingredients.style.display = 'none';
      btn.textContent = 'Mostrar Ingredientes';
    } else {
      ingredients.style.display = 'block';
      btn.textContent = 'Ocultar Ingredientes';
    }
  });
});
