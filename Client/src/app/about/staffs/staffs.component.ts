import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-staffs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './staffs.component.html',
  styleUrl: './staffs.component.css'
})
export class StaffsComponent {
  @Input() staffData:any;
}
