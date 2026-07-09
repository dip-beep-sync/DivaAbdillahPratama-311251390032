document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = Array.from(navLinks).map(link =>
    document.getElementById(link.dataset.target)
  );

  // Klik nav -> scroll cepat & halus ke section terkait
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const target = document.getElementById(link.dataset.target);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Highlight nav aktif sesuai section yang sedang terlihat saat scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.target === id);
          });
        }
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach(section => {
    if (section) observer.observe(section);
  });
});
