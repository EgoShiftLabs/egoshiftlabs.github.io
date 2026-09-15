(() => {
  const topbar = document.querySelector('.topbar');
  const menu = document.querySelector('.menu');
  if (menu) {
    menu.addEventListener('click', () => {
      const open = topbar.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(open));
    });
    topbar.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => {
      topbar.classList.remove('open');
      menu.setAttribute('aria-expanded', 'false');
    }));
  }

  const output = document.getElementById('terminal-output');
  if (!output) return;
  const lines = [
    ['> POWER BUS ................. STABLE', 'dim'],
    ['> G.E.E.K. KERNEL ........... ONLINE', 'good'],
    ['> SIGNAL SOURCE .............. 1973', 'warn'],
    ['> SEARCHING MODERN SYSTEMS ...', 'dim'],
    ['> AUTONOMOUS TRANSPORT ....... MATCH', 'good'],
    ['> ROBOTIC LABOR .............. MATCH', 'good'],
    ['> SYNTHETIC MEDIA ............ MATCH', 'good'],
    ['> AI KNOWLEDGE WORK .......... MATCH', 'good'],
    ['> AGENTIC SOFTWARE ........... MATCH', 'good'],
    ['> CENTRAL QUESTION:', 'warn'],
    ['  HOW MUCH EFFORT DO HUMANS DELEGATE?', ''],
    ['> SYSTEM STATUS .............. BOOTING', 'good']
  ];
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let i = 0;
  const draw = () => {
    if (i >= lines.length) {
      const cursor = document.createElement('span');
      cursor.className = 'terminal-cursor';
      output.appendChild(cursor);
      return;
    }
    const line = document.createElement('span');
    line.className = `terminal-line ${lines[i][1]}`;
    line.textContent = lines[i][0];
    output.appendChild(line);
    i += 1;
    window.setTimeout(draw, reduce ? 0 : (i < 4 ? 220 : 155));
  };

  const observer = new IntersectionObserver(entries => {
    if (entries.some(e => e.isIntersecting)) {
      observer.disconnect();
      draw();
    }
  }, { threshold: 0.25 });
  observer.observe(output);
})();
