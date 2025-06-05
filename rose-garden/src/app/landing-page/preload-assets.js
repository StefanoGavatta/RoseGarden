/**
 * Script per precaricare risorse critiche per migliorare le prestazioni
 */

// Precarica i font da Google Fonts per migliorare CLS (Cumulative Layout Shift)
const fontPreloadLink = document.createElement('link');
fontPreloadLink.rel = 'preload';
fontPreloadLink.href = 'https://fonts.googleapis.com/css2?family=Wix+Madefor+Text:wght@400;500;600;700&display=swap';
fontPreloadLink.as = 'style';
document.head.appendChild(fontPreloadLink);

// Listener per verificare quando la pagina è completamente caricata
window.addEventListener('load', function() {
  // Rimuove la classe di caricamento dopo che la pagina è completamente caricata
  setTimeout(function() {
    const spinner = document.querySelector('.loading-spinner');
    if (spinner) {
      spinner.classList.add('hidden');
      
      // Dopo l'animazione di fade-out, rimuovi completamente lo spinner
      setTimeout(function() {
        spinner.style.display = 'none';
      }, 500);
    }
    
    // Aggiungi classe loaded al container principale
    const landingContainer = document.querySelector('.landing-container');
    if (landingContainer) {
      landingContainer.classList.add('loaded');
    }
  }, 300);
});
