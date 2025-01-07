import { Component } from '@angular/core';
import { CommonComponent } from "../common/common.component";
import { LearingCardComponent } from "./learing-card/learing-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-learning',
  standalone: true,
  imports: [CommonComponent, LearingCardComponent ,CommonModule],
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.css'
})
export class LearningComponent {
  common = {
      path : "https://static.wixstatic.com/media/2feeec_bbc455c06e9e47cebea18419a5e2d191~mv2.jpg/v1/fill/w_547,h_743,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2feeec_bbc455c06e9e47cebea18419a5e2d191~mv2.jpg",
      h1 : "Learning",
      h2  : "",
      p : "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.vClick here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
    }


    cardDetails = [
      {
        h1: "Online Classes For All",
        bgImage : "https://static.wixstatic.com/media/2feeec_b830a89527584955af6a2627d6c0990b~mv2.jpg/v1/fill/w_306,h_503,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2feeec_b830a89527584955af6a2627d6c0990b~mv2.jpg",
        bgColor : "#A6180D",
        p : ""
      },
      {
        h1: "Pre-K and K",
        bgImage : "https://static.wixstatic.com/media/2feeec_b945a161ee2f4b908f31cbb174de9571~mv2.jpg/v1/fill/w_306,h_503,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2feeec_b945a161ee2f4b908f31cbb174de9571~mv2.jpg",
        bgColor : "#05244F",
        p : ""
      },
      {
        h1: "Grades 1-4",
        bgImage : "https://static.wixstatic.com/media/2feeec_ea413ccc854244f287939011bee81888~mv2.jpg/v1/fill/w_306,h_503,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2feeec_ea413ccc854244f287939011bee81888~mv2.jpg",
        bgColor : "#A6180D",
        p : ""
      },
      {
        h1: "Grades 5-8",
        bgImage : "https://static.wixstatic.com/media/2feeec_06b3e6cc11f84777a1c7ba1f5b32a93b~mv2.jpg/v1/fill/w_306,h_503,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2feeec_06b3e6cc11f84777a1c7ba1f5b32a93b~mv2.jpg",
        bgColor : "#05244F",
        p : ""
      },
    ]


}
