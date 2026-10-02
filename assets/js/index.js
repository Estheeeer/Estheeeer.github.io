function toggleMobileMenu(menu) {
  const open = menu.classList.toggle('open');
  const trigger = menu.querySelector('.menu-toggle') || menu;
  trigger.setAttribute('aria-expanded', String(open));
  trigger.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
}
document.documentElement.classList.add('js');
const menu = document.getElementById('hamburger-icon');
if (menu) {
  // Keep the existing menu markup, with a native keyboard-accessible button.
  menu.removeAttribute('onclick');
  const trigger = document.createElement('button');
  trigger.className = 'menu-toggle';
  trigger.type = 'button';
  trigger.setAttribute('aria-expanded', 'false');
  trigger.setAttribute('aria-label', 'Open navigation');
  const list = menu.querySelector('.mobile-menu');
  if (list) {
    list.id = 'mobile-navigation';
    trigger.setAttribute('aria-controls', list.id);
  }
  [...menu.children].filter(child => child.tagName === 'DIV').forEach(bar => trigger.append(bar));
  menu.prepend(trigger);
  trigger.addEventListener('click', () => toggleMobileMenu(menu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.classList.contains('open')) {
      toggleMobileMenu(menu);
      trigger.focus();
    }
  });
  document.addEventListener('click', event => {
    if (!menu.contains(event.target) && menu.classList.contains('open')) toggleMobileMenu(menu);
  });
  list?.addEventListener('click', event => {
    if (event.target.closest('a') && menu.classList.contains('open')) toggleMobileMenu(menu);
  });
}
