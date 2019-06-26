import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  providers: [ NgbCarouselConfig ]
})
export class SliderComponent implements OnInit {

  images = [
    "https://www.picturemotions.com/admin/uploads/Untitled-1.jpg",
    "https://www.picturemotions.com/admin/uploads/Untitled-2.jpg",
    "https://www.picturemotions.com/admin/uploads/Untitled-3.jpg",
    "https://www.picturemotions.com/admin/uploads/Untitled-2.jpg"
  ];

  constructor(config: NgbCarouselConfig) {
    config.interval = 4000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
   }

  ngOnInit() {
  }

}
