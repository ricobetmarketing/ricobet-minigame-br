// assets/common.js
window.MG_LOCK_KEY = 'mg_game_choice_v1';

window.getChoice = () => localStorage.getItem(window.MG_LOCK_KEY);
window.setChoice = (choice) => localStorage.setItem(window.MG_LOCK_KEY, choice);
window.clearChoice = () => localStorage.removeItem(window.MG_LOCK_KEY);

// Optional: allow reset via URL param (?reset=1)
(() => {
  const p = new URLSearchParams(location.search);
  if (p.get('reset') === '1') localStorage.removeItem(window.MG_LOCK_KEY);
})();
