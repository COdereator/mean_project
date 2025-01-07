import { Component, Input, Output } from '@angular/core';
import { MainComponentComponent } from '../main-component/main-component.component';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { Card02Component } from '../card-02/card-02.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MainComponentComponent,CommonModule,CardComponent,Card02Component],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  school = "Stanford Elementary"

  cardData = [
    {
      h1 : "Admission",
      p : "I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.",
      a : "Enroll Today",
      bgcolor : "#D43C2B",
      bgImage : ""
    },
    {
      h1 : "Enhance Learning",
      p : "I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.",
      a : "View Programs",
      bgcolor : "",
      bgImage : "https://static.wixstatic.com/media/2feeec_8d2ef31d73af4fbbbdd908fbfed2863f~mv2.jpg/v1/fill/w_408,h_542,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2feeec_8d2ef31d73af4fbbbdd908fbfed2863f~mv2.jpg"
    },
    {
      h1 : "Latest News & Events",
      p : "I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.",
      a : "View All",
      bgcolor : "#A6180D",
      bgImage : ""
    },
    {
      h1 : "",
      p : "",
      a : "",
      bgcolor : "",
      bgImage : "https://static.wixstatic.com/media/2feeec_191fcb6eb4fa4bcfa9c0ed351f0c7fbe~mv2.jpg/v1/fill/w_434,h_542,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2feeec_191fcb6eb4fa4bcfa9c0ed351f0c7fbe~mv2.jpg"
    },
    {
      h1 : "For the Parents",
      p : "I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.",
      a : "Get Informed",
      bgcolor : "#7D221A",
      bgImage : ""
    },
     {
      h1 : "",
      p : "",
      a : "",
      bgcolor : "",
      bgImage : "https://static.wixstatic.com/media/2feeec_309ff0131c4f45719d04228b68e9caba~mv2.jpg/v1/fill/w_409,h_542,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2feeec_309ff0131c4f45719d04228b68e9caba~mv2.jpg"
    },
  ]


  card2Data = [
    {
      svg : "assets/images/1.png",
      h1  : "60",
      p : "Years of Excellence",
      bgImage : ""
    },
    {
      svg : "assets/images/2.png",
      h1  : "25",
      p : "High Schools Enroll Our Graduates",
      bgImage : ""
    },
    {
      svg : "assets/images/3.png",
      h1  : "45",
      p : "Certified Teachers",
      bgImage : ""
    },
    {
      svg : "assets/images/4.png",
      h1  : "100",
      p : "Satisfied Parents",
      bgImage : ""
    },
    {
      svg : "",
      h1  : "",
      p : "",
      bgImage : "https://static.wixstatic.com/media/2feeec_4faa17fa414142a2847de78e84385829~mv2.jpg/v1/fill/w_416,h_477,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2feeec_4faa17fa414142a2847de78e84385829~mv2.jpg"
    },
    {
      svg : "assets/images/5.png",
      h1  : "75",
      p : "Athletic Participation",
      bgImage : ""
    }
  ]
}
