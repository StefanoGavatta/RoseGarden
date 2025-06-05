import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cards-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cards-page.component.html',
  styleUrls: ['./cards-page.component.css']
})
export class CardsPageComponent {}
