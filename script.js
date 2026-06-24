const links = document.querySelectorAll('nav a');
links.forEach(link => {
  link.addEventListener('click', function(e) {
    const destino = this.getAttribute('href');
    if (destino.startsWith('#')) {
      e.preventDefault();
      document.querySelector(destino).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
