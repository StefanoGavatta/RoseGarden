import { Routes } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';
import { CardsPageComponent } from './cards-page/cards-page.component';

export const routes: Routes = [
  { path: '', component: LandingPage },
  { path: 'cards', component: CardsPageComponent },
  { path: '**', redirectTo: '' }
];
