import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css'
})
export class LandingPage {
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
    // Seleziona l'header e aggiungi/rimuovi la classe
    const header = document.querySelector('.header') as HTMLElement;
    if (header) {
      if (this.isScrolled) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Effetto parallasse sui cerchi decorativi
    this.handleParallaxEffect();
  }
  
  // Metodo per creare effetto parallasse sui cerchi
  handleParallaxEffect(): void {
    const circles = document.querySelectorAll('.circle') as NodeListOf<HTMLElement>;
    const scrollPosition = window.scrollY;
    
    circles.forEach((circle, index) => {
      // Diversi valori per ciascun cerchio per un effetto più naturale
      const speed = 0.05 * (index % 3 + 1); // Velocità diverse: 0.05, 0.10, 0.15
      const yPos = scrollPosition * speed;
      
      // Trasformiamo il cerchio con un valore di parallasse
      circle.style.transform = `translateY(${yPos}px)`;
    });
  }
  
  // Metodo per gestire il clic sul pulsante Explore
  onExploreClick(): void {
    console.log('Explore button clicked');
    // Smooth scroll alla sezione successiva (footer temporaneamente)
    const footerElement = document.querySelector('.footer') as HTMLElement;
    if (footerElement) {
      const contentSection = document.querySelector('#content-section') as HTMLElement;
      if (contentSection) {
        contentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // Se non esiste ancora la sezione contenuto, scroll al footer come fallback
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        });
      }
    }
  }
}
