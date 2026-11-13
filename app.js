const dateNode = document.getElementById('todayDate');
dateNode.textContent = new Intl.DateTimeFormat('fr-FR', {
  weekday: 'short', day: '2-digit', month: 'short'
}).format(new Date());

const tabs = [...document.querySelectorAll('.tab')];
const matches = document.getElementById('matches');
const news = document.getElementById('newsPanel');
const title = document.getElementById('sectionTitle');

tabs.forEach(tab => tab.addEventListener('click', () => {
  tabs.forEach(item => item.classList.toggle('active', item === tab));
  const view = tab.dataset.view;
  news.classList.toggle('hidden', view !== 'news');
  matches.classList.toggle('hidden', view === 'news');
  title.textContent = view === 'today' ? 'Programme du jour'
    : view === 'news' ? 'Actualités football' : 'Matchs en direct';
}));

if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  window.addEventListener('load', () =>
    navigator.serviceWorker.register('./sw.js').catch(console.error)
  );
}
