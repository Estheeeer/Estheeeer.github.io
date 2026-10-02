// Navigation and copy remain usable before any optional media loads.
(() => {
  const items = document.querySelectorAll('.menu .nav li');
  const categories = document.querySelectorAll('.category');
  const label = document.querySelector('.above-line-text span');
  function show(index) {
    categories.forEach((category, i) => {
      category.classList.toggle('show', i === index);
      category.hidden = i !== index;
      if (i !== index) {
        category.querySelector('iframe')?.remove();
        category.classList.remove('is-playing');
        const button = category.querySelector('.animation-button');
        if (button) { button.disabled = false; button.textContent = 'Load animation'; }
      }
    });
    if (label) label.textContent = items[index].dataset.menu;
  }
  items.forEach((item, index) => {
    item.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') show(index); });
    item.querySelector('a')?.addEventListener('focus', () => show(index));
  });
  document.querySelectorAll('.animation-button').forEach(button => {
    button.addEventListener('click', () => {
      const category = button.closest('.category');
      const existing = category.querySelector('iframe');
      if (existing) {
        existing.remove();
        category.classList.remove('is-playing');
        button.textContent = 'Load animation';
        return;
      }
      const frame = document.createElement('iframe');
      frame.title = button.dataset.title;
      frame.allowFullscreen = true;
      frame.src = button.dataset.src;
      category.querySelector('.preview-media').append(frame);
      category.classList.add('is-playing');
      button.textContent = 'Stop animation';
    });
  });
})();
