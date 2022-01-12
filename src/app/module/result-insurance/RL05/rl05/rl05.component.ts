import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rl05',
  templateUrl: './rl05.component.html',
  styleUrls: ['./rl05.component.scss']
})
export class Rl05Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data = [
    { img: "https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img1.jpg", title: "Slide 1" },
    { img: "https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img2.jpg", title: "Slide 2" },
    { img: "https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img3.jpg", title: "Slide 3" }
  ];


}
