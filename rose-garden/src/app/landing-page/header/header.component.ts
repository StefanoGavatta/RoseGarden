import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() home = new EventEmitter<void>();
  @Output() info = new EventEmitter<void>();

  onHomeClick(event: Event) {
    event.preventDefault();
    this.home.emit();
  }

  onInfoClick(event: Event) {
    event.preventDefault();
    this.info.emit();
  }
}
