import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css'
})
export class LandingPage {
  // Aggiungi metodo per gestire il clic sul pulsante
  onExploreClick(): void {
    console.log('Explore button clicked');
    // Qui puoi aggiungere la navigazione o altre azioni
  }
}
