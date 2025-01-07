import { Component } from '@angular/core';
import { CommonComponent } from "../common/common.component";
import { ParentCardComponent } from "./parent-card/parent-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parents',
  standalone: true,
  imports: [CommonComponent, ParentCardComponent,CommonModule],
  templateUrl: './parents.component.html',
  styleUrl: './parents.component.css'
})
export class ParentsComponent {
  common = {
      path : "https://static.wixstatic.com/media/2feeec_0fba96eb3f9a442496caba5403a9f1ea~mv2.jpg/v1/fill/w_547,h_743,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2feeec_0fba96eb3f9a442496caba5403a9f1ea~mv2.jpg",
      h1 : "For the",
      h2  : "Parents",
      p : "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
    }

    cardDetails = [
      {
        bgImage : "https://static.wixstatic.com/media/2feeec_b2f0230a9361430eabe74f26606afd21~mv2.jpg/v1/fill/w_490,h_327,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-586727486.jpg",
        h1 : "Arriving at School",
        p : "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page.",
        bgColor : "#FFE8E1"
      },
      {
        bgImage : "https://static.wixstatic.com/media/2feeec_4faa17fa414142a2847de78e84385829~mv2.jpg/v1/fill/w_490,h_327,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-1049288470.jpg",
        h1 : "Uniform",
        p : "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page.",
        bgColor : "#FFD2C4"
      },
      {
        bgImage : "https://static.wixstatic.com/media/2feeec_705e890fd5cc4e8aba2d64c92da29f9b~mv2.jpg/v1/fill/w_490,h_327,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-1095409062.jpg",
        h1 : "Holidays & Absence",
        p : "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page.",
        bgColor : "#FFD2C4"
      },
      {
        bgImage : "https://static.wixstatic.com/media/2feeec_d70c101cd5934defab39bfbca20432cc~mv2.jpg/v1/fill/w_490,h_327,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_610059890.jpg",
        h1 : "Schools Menu",
        p : "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page.",
        bgColor : "#FFE8E1"
      },
    ]
    
}
