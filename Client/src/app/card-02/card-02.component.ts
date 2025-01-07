import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-02',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-02.component.html',
  styleUrl: './card-02.component.css'
})
export class Card02Component {

  @Input() cardDataDetails:any

}
