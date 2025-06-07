import { Routes } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';
import { CardsPageComponent } from './cards-page/cards-page.component';
import { ShowcasePageComponent } from './showcase-page/showcase-page.component';
import { FormsPageComponent } from './forms-page/forms-page.component';
import { AggiornmentiPageComponent } from './aggiornamenti-page/aggiornamenti-page.component';

export const routes: Routes = [
  { path: '', component: LandingPage },
  { path: 'cards', component: CardsPageComponent },
  { path: 'info', component: ShowcasePageComponent },
  { path: 'showcase', redirectTo: 'info' },
  { path: 'lavora-con-noi', component: AggiornmentiPageComponent },
  { path: 'aggiornamenti', component: AggiornmentiPageComponent },
  { path: 'forms', component: FormsPageComponent },
  { path: '**', redirectTo: '' }
];
