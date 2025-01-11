function changeLanguage() {
    const icon = document.getElementById('language-icon');
    const htmlElement = document.documentElement; 
    
    // Alterna o idioma e o ícone
    if (icon.src.includes('brazil.png')) {
      icon.src = 'images/usa.png';
      icon.alt = 'Bandeira dos EUA';
      htmlElement.lang = 'en'; 
    } else {
      icon.src = 'images/brazil.png';
      icon.alt = 'Bandeira do Brasil';
      htmlElement.lang = 'pt-br'; 
    }
  
    // Atualiza os textos no site
    const elements = document.querySelectorAll('[data-pt], [data-en]');
    elements.forEach((el) => {
      const isPt = htmlElement.lang === 'pt-br';
      el.textContent = isPt
        ? el.getAttribute('data-pt')
        : el.getAttribute('data-en');
    });
  }
  