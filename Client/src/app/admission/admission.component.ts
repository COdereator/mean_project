import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';

@Component({
  selector: 'app-admission',
  standalone: true,
  imports: [CommonComponent],
  templateUrl: './admission.component.html',
  styleUrl: './admission.component.css'
})
export class AdmissionComponent {
   common = {
      path : "https://static.wixstatic.com/media/2feeec_54cc94e5673243a4843eafb567842e1d~mv2.jpg/v1/fill/w_547,h_743,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2feeec_54cc94e5673243a4843eafb567842e1d~mv2.jpg",
      h1 : "Admissions",
      h2  : "",
      p : "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or  double click me to add your own content and make changes to the font.I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
    }
  
}
