import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parent-card.component.html',
  styleUrl: './parent-card.component.css'
})
export class ParentCardComponent {
  @Input() card:any;
}
