import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-showcase-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './showcase-page.component.html',
  styleUrls: ['./showcase-page.component.css']
})
export class ShowcasePageComponent implements OnInit {
  
  // Proprietà per gestire l'interattività
  currentSection: string = 'hero';
  isLoaded: boolean = false;

  ngOnInit() {
    // Simula il caricamento della pagina
    setTimeout(() => {
      this.isLoaded = true;
    }, 500);
  }

  // Gestisce lo scroll per evidenziare la sezione corrente
  @HostListener('window:scroll')
  onScroll() {
    const sections = ['hero', 'gameplay', 'story', 'art', 'characters'];
    const scrollPosition = window.pageYOffset + window.innerHeight / 2;

    for (const section of sections) {
      const element = document.querySelector(`.${section}-section`);
      if (element) {
        const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
        const elementBottom = elementTop + element.clientHeight;
        
        if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
          this.currentSection = section;
          break;
        }
      }
    }
  }

  // Metodi per i bottoni CTA
  onPlayNow() {
    console.log('Avvio del gioco...');
    // Qui si potrebbe implementare la logica per avviare il gioco
  }

  onLearnMore() {
    console.log('Reindirizzamento a maggiori informazioni...');
    // Qui si potrebbe implementare la navigazione a una pagina di dettagli
  }
}
