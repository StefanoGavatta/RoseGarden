import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FormCard {
  title: string;
  description: string;
  formUrl: string;
  icon: string;
  category: string;
}

@Component({
  selector: 'app-forms-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forms-page.component.html',
  styleUrls: ['./forms-page.component.css']
})
export class FormsPageComponent {
  
  formCards: FormCard[] = [
    {
      title: 'Candidatura Team',
      description: 'Unisciti al nostro team di sviluppo e collabora con noi per crescere insieme nel mondo della programmazione.',
      formUrl: 'https://forms.gle/example1',
      icon: 'group_add',
      category: 'recruitment'
    },
    {
      title: 'Proposta Progetto',
      description: 'Hai un\'idea innovativa? Proponi il tuo progetto e ricevi feedback dalla nostra community.',
      formUrl: 'https://forms.gle/example2',
      icon: 'lightbulb',
      category: 'projects'
    },
    {
      title: 'Feedback Rose Garden',
      description: 'Aiutaci a migliorare Rose Garden condividendo la tua esperienza e i tuoi suggerimenti.',
      formUrl: 'https://forms.gle/example3',
      icon: 'feedback',
      category: 'feedback'
    },
    {
      title: 'Partnership',
      description: 'Sei interessato a una collaborazione? Compila il form per esplorare opportunità di partnership.',
      formUrl: 'https://forms.gle/example4',
      icon: 'handshake',
      category: 'business'
    },
    {
      title: 'Supporto Tecnico',
      description: 'Hai riscontrato un problema o hai bisogno di assistenza? Contattaci attraverso questo modulo.',
      formUrl: 'https://forms.gle/example5',
      icon: 'support_agent',
      category: 'support'
    },
    {
      title: 'Workshop & Eventi',
      description: 'Iscriviti ai nostri workshop e eventi per imparare nuove tecnologie e incontrare altri sviluppatori.',
      formUrl: 'https://forms.gle/example6',
      icon: 'event',
      category: 'events'
    },
    {
      title: 'Mentorship',
      description: 'Richiedi una sessione di mentorship personalizzata con i nostri esperti del settore.',
      formUrl: 'https://forms.gle/example7',
      icon: 'school',
      category: 'education'
    },
    {
      title: 'Community',
      description: 'Partecipa attivamente alla nostra community e contribuisci alle discussioni sui progetti.',
      formUrl: 'https://forms.gle/example8',
      icon: 'forum',
      category: 'community'
    },
    {
      title: 'Beta Testing',
      description: 'Testa in anteprima i nostri nuovi progetti e aiutaci a perfezionarli prima del rilascio.',
      formUrl: 'https://forms.gle/example9',
      icon: 'bug_report',
      category: 'testing'
    }
  ];

  openForm(formUrl: string): void {
    window.open(formUrl, '_blank');
  }
}
