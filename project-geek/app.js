const menuButton = document.querySelector('.menu');
const nav = document.querySelector('.topbar nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.textContent = isOpen ? 'CLOSE' : 'MENU';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = 'MENU';
  }));
}

const terminalOutput = document.getElementById('terminal-output');
if (terminalOutput) {
  const lines = [
    '> SYSTEM INITIALIZED',
    '> YEAR: 1973',
    '> SIGNAL: G.E.E.C.',
    '> INTERPRETATION: GLOBAL EFFORT ELIMINATION KERNEL',
    '> STATE: CULTURAL ARCHIVE OF THE AUTOMATED AGE',
    '> NETWORK: SOLANA',
    '> TICKER: GEEK',
    '> STATUS: BOOT SEQUENCE ACTIVE',
    '> NOTE: THE FUTURE WAS LEAKED'
  ];
  let lineIndex = 0;
  let charIndex = 0;
  const renderLine = () => {
    if (lineIndex >= lines.length) return;
    let current = terminalOutput.lastElementChild;
    if (!current || !current.classList.contains('line')) {
      current = document.createElement('span');
      current.className = 'line';
      terminalOutput.appendChild(current);
    }
    current.textContent = lines[lineIndex].slice(0, charIndex + 1);
    charIndex += 1;
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
    if (charIndex >= lines[lineIndex].length) {
      lineIndex += 1;
      charIndex = 0;
      setTimeout(renderLine, 180);
    } else {
      setTimeout(renderLine, 22);
    }
  };
  renderLine();
}
