import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aggiornamenti-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aggiornamenti-page.component.html',
  styleUrls: ['./aggiornamenti-page.component.css']
})
export class AggiornmentiPageComponent {
  aggiornamenti = [
    {
      data: '2025-06-05',
      titolo: 'Lorem Ipsum Dolor Sit',
      descrizione: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      immagine: 'https://via.placeholder.com/400x400/cdb4db/ffffff?text=Update+1'
    },
    {
      data: '2025-06-01',
      titolo: 'Consectetur Adipiscing',
      descrizione: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.',
      immagine: 'https://via.placeholder.com/400x400/ffc8dd/ffffff?text=Update+2'
    },
    {
      data: '2025-05-28',
      titolo: 'Tempor Incididunt',
      descrizione: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.',
      immagine: 'https://via.placeholder.com/400x400/ffafcc/ffffff?text=Update+3'
    },
    {
      data: '2025-05-25',
      titolo: 'Quis Autem Vel Eum',
      descrizione: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.',
      immagine: 'https://via.placeholder.com/400x400/bde0fe/ffffff?text=Update+4'
    },
    {
      data: '2025-05-20',
      titolo: 'Excepteur Sint Occaecat',
      descrizione: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
      immagine: 'https://via.placeholder.com/400x400/a2d2ff/ffffff?text=Update+5'
    }
  ];
}
