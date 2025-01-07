import { Component } from '@angular/core';
import { CommonComponent } from '../common/common.component';
import { CommonModule } from '@angular/common';
import { StaffsComponent } from './staffs/staffs.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonComponent, CommonModule,StaffsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  common = {
      path : "https://static.wixstatic.com/media/2feeec_10bf81bc3e394f0d8daaaf5c62e15d6c~mv2.jpg/v1/fill/w_581,h_825,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2feeec_10bf81bc3e394f0d8daaaf5c62e15d6c~mv2.jpg",
      h1 : "About",
      h2  : "Our School",
      p : "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
    }

    staffDatas = [
      {
        bgImage : "https://static.wixstatic.com/media/2feeec_b24343dae38d4749aa5a6bcdb460444c~mv2.jpg/v1/fill/w_347,h_557,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2feeec_b24343dae38d4749aa5a6bcdb460444c~mv2.jpg",
        h1 : "Emily Cole",
        p : "Head of School",
        cardColor :"#05244F"
      },
      {
        bgImage : "https://static.wixstatic.com/media/2feeec_05ee16eaa99b4e29895e7cdd061813d7~mv2.jpg/v1/fill/w_348,h_557,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2feeec_05ee16eaa99b4e29895e7cdd061813d7~mv2.jpg",
        h1 : "Adam Ginzberg",
        p : "Principal Pre-K and K",
        cardColor :"#C9ECF5"
      },
      {
        bgImage : "https://static.wixstatic.com/media/2feeec_c9890409cd074c0fa01bd3e3152f16a0~mv2.jpg/v1/fill/w_348,h_557,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2feeec_c9890409cd074c0fa01bd3e3152f16a0~mv2.jpg",
        h1 : "Kelly Carmen",
        p : "Grades 1-4",
        cardColor :"#A6180D"
      },
      {
        bgImage : "https://static.wixstatic.com/media/2feeec_606ede414d6342cb97711416ac8adb81~mv2.jpg/v1/fill/w_347,h_544,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2feeec_606ede414d6342cb97711416ac8adb81~mv2.jpg",
        h1 : "Alex T. Yang",
        p : "Grades 5-8", 
        cardColor :"#C9ECF5"
      },
      {
        bgImage : "https://static.wixstatic.com/media/2feeec_7832e3d81e0a4a01aa24f4d2aa7b4fd8~mv2.jpg/v1/fill/w_348,h_544,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2feeec_7832e3d81e0a4a01aa24f4d2aa7b4fd8~mv2.jpg",
        h1 : "Aiden Hardy",
        p : "Admissions Director",
        cardColor :"#A6180D"
      },
      {
        bgImage : "https://static.wixstatic.com/media/2feeec_9549811950534d5899b8ccf1212690e1~mv2.jpg/v1/fill/w_348,h_544,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2feeec_9549811950534d5899b8ccf1212690e1~mv2.jpg",
        h1 : "Trent Roman",
        p : "Operations Director",
        cardColor :"#05244F"
      },
      {
        bgImage : "https://static.wixstatic.com/media/2feeec_90a605faf75b4d96ab5e972415a88c37~mv2.jpg/v1/fill/w_347,h_545,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2feeec_90a605faf75b4d96ab5e972415a88c37~mv2.jpg",
        h1 : "Maria Jameson",
        p : "School Nurse", 
        cardColor :"#A6180D"
      },
      {
        bgImage : "https://static.wixstatic.com/media/2feeec_504789f48b2a4b64a5c6289baa4dc367~mv2.jpg/v1/fill/w_348,h_545,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2feeec_504789f48b2a4b64a5c6289baa4dc367~mv2.jpg",
        h1 : "Dianna Jervis",
        p : "Head Teacher",
        cardColor :"#05244F"
      },
      {
        bgImage : "https://static.wixstatic.com/media/2feeec_d6659717840844e69c5f22d45544332e~mv2.jpg/v1/fill/w_348,h_545,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2feeec_d6659717840844e69c5f22d45544332e~mv2.jpg",
        h1 : "Trent Roman",
        p : "Head Teacher",
        cardColor :"#C9ECF5"
      },
    ]

}
