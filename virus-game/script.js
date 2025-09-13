
const messageWindow = document.getElementById('messageWindow');
const closeBtn = document.getElementById('closeMsg');
const actionBtn = document.getElementById('actionBtn');

closeBtn.addEventListener('click', () => {
  messageWindow.style.display = 'none';
});

actionBtn.addEventListener('click', () => {
  alert('Button clicked!');
});
