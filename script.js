// Animate text on load
window.onload = () => {
  document.querySelectorAll('.animate-text').forEach(el => {
    el.classList.add('visible');
  });
  updateThemeIcon(); // apply correct icon
};

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Grow effect on section titles
document.querySelectorAll('h2').forEach(h2 => {
  h2.addEventListener('mouseover', () => {
    h2.style.transform = 'scale(1.05)';
    h2.style.transition = 'transform 0.3s ease';
  });
  h2.addEventListener('mouseout', () => {
    h2.style.transform = 'scale(1)';
  });
});

// Highlight nav link based on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

// Dark mode toggle
const toggleIcon = document.getElementById('darkToggle');

function updateThemeIcon() {
  const isDark = document.body.classList.contains('dark-mode');
  toggleIcon.innerHTML = isDark ? '☀️' : '🌙';
  toggleIcon.classList.add('rotate');
  setTimeout(() => toggleIcon.classList.remove('rotate'), 400);
}

toggleIcon.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  updateThemeIcon();
});
