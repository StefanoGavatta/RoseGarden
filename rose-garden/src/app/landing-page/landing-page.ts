import { Component, HostListener, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css'
})
export class LandingPage implements AfterViewInit {
  isScrolled = false;
  isLoaded = false;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    // Attivare l'animazione di ingresso dopo un breve ritardo
    setTimeout(() => {
      this.isLoaded = true;
      const container = this.elementRef.nativeElement.querySelector('.landing-container');
      if (container) {
        container.classList.add('loaded');
      }
    }, 300);

    // Aggiungere il listener per il prefers-reduced-motion
    this.checkReducedMotionPreference();
  }

  // Controlla se l'utente preferisce ridurre le animazioni
  checkReducedMotionPreference() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // Trova tutti gli elementi con animazioni e rimuovi l'animazione
      const animatedElements = this.elementRef.nativeElement.querySelectorAll('.circle, .feature-card, .content-container, .rose-decoration');
      animatedElements.forEach((el: HTMLElement) => {
        el.style.animation = 'none';
        el.style.transform = 'none';
        el.style.opacity = '1';
      });
    }
  }

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
    // Verifica se l'utente preferisce ridurre i movimenti
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return; // Non applicare parallasse se l'utente preferisce ridurre i movimenti
    }
    
    const circles = document.querySelectorAll('.circle') as NodeListOf<HTMLElement>;
    const scrollPosition = window.scrollY;
    
    circles.forEach((circle, index) => {
      // Diversi valori per ciascun cerchio per un effetto più naturale
      const speed = 0.05 * (index % 3 + 1); // Velocità diverse: 0.05, 0.10, 0.15
      const yPos = scrollPosition * speed;
      
      // Trasformiamo il cerchio con un valore di parallasse
      circle.style.transform = `translateY(${yPos}px) translateZ(0)`;
    });
  }
  
  // Metodo per gestire il clic sul pulsante Explore
  onExploreClick(): void {
    console.log('Explore button clicked');
    // Smooth scroll alla sezione successiva
    const contentSection = document.querySelector('#content-section') as HTMLElement;
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Metodo per scrollare verso l'alto quando viene cliccato il pulsante "Torna su"
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // Metodo per lo scroll a una sezione specifica
  scrollToSection(sectionId: string, event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    
    const sectionElement = document.querySelector(sectionId) as HTMLElement;
    if (sectionElement) {
      // Verifica preferenza utente per ridurre movimenti
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        // Scroll istantaneo se l'utente preferisce ridurre i movimenti
        window.scrollTo({
          top: sectionElement.offsetTop
        });
      } else {
        // Smooth scroll altrimenti
        sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }
}
