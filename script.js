
function toggle(el) {
  const sublist = el.nextElementSibling;
  if (!sublist) return;
  const isHidden = sublist.style.display === 'none' || sublist.style.display === '';
  sublist.style.display = isHidden ? 'block' : 'none';
  el.textContent = (isHidden ? '- ' : '+ ') + el.textContent.slice(2);
}
