import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { CardsPageComponent } from '../cards-page.component';
import { FooterComponent } from './footer/footer.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    FooterComponent,
    LoadingSpinnerComponent,
    CardsPageComponent
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css'
})
export class LandingPage implements AfterViewInit {
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
      // Scroll istantaneo se l'utente preferisce ridurre i movimenti
      window.scrollTo({
        top: sectionElement.offsetTop
      });
    }
  }
}
