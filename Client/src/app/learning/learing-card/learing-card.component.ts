import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-learing-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './learing-card.component.html',
  styleUrl: './learing-card.component.css'
})
export class LearingCardComponent {
  @Input() cardDetails:any;
}
