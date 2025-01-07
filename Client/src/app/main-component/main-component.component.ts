import { Component } from '@angular/core';
import { SectionComponent } from "../section/section.component";

@Component({
  selector: 'app-main-component',
  standalone: true,
  imports: [SectionComponent],
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.css'
})
export class MainComponentComponent {
  path = "https://static.wixstatic.com/media/2feeec_05ee2afbcf06479195c1b99e65872828~mv2.jpg/v1/crop/x_0,y_26,w_5704,h_3757/fill/w_470,h_309,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-1254621168.jpg"
}
