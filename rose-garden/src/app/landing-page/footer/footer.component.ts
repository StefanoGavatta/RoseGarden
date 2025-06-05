import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Output() backToTop = new EventEmitter<void>();
  onBackToTop() {
    this.backToTop.emit();
  }
}
