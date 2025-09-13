// Data for computers
const computers = [
  { id: 1, name: "Windows XP", securityLevel: 10, hacked: false },
  { id: 2, name: "Windows 10", securityLevel: 20, hacked: false },
  { id: 3, name: "Mac", securityLevel: 50, hacked: false }
];

let resources = 0;

const resourcesSpan = document.getElementById('resources');
const computerListDiv = document.getElementById('computer-list');
const hackBtn = document.getElementById('hackBtn');

function updateResources() {
  resourcesSpan.textContent = resources;
}

function renderComputers() {
  computerListDiv.innerHTML = '';
  computers.forEach(comp => {
    const compDiv = document.createElement('div');
    compDiv.innerHTML = `
      <h3>${comp.name}</h3>
      <p>Security Level: ${comp.securityLevel}</p>
      <p>Status: ${comp.hacked ? 'Hacked' : 'Secure'}</p>
    `;
    computerListDiv.appendChild(compDiv);
  });
}

function attemptHack() {
  // Pick a random computer to hack
  const target = computers.find(c => !c.hacked);
  if (!target) {
    alert("All computers hacked!");
    return;
  }
  // Cost based on security
  const cost = target.securityLevel;
  if (resources >= cost) {
    resources -= cost;
    target.hacked = true;
    resources += target.securityLevel * 2; // reward
    alert(`Hacked into ${target.name}!`);
  } else {
    alert(`Not enough resources to hack ${target.name}.`);
  }
  updateResources();
  renderComputers();
}

// Increment resources over time
setInterval(() => {
  resources += 1;
  updateResources();
}, 1000);

hackBtn.addEventListener('click', attemptHack);

// Initialize
renderComputers();
updateResources();
