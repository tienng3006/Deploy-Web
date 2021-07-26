import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  constructor() {}
  setStyles(imgUrl: string) {
    return {
      'background-image': `url('${imgUrl}')`,
      'background-position': 'center',
      'background-repeat': 'no-repeat',
      'background-size': 'cover',
    };
  }
  Options: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    autoplay: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: false,
  };

  slidesStore = [
    {
      id: '1',
      src: 'https://theme.hstatic.net/1000251698/1000330754/14/ms_banner_img1.jpg?v=2912',
    },
    {
      id: '2',
      src: 'https://theme.hstatic.net/1000251698/1000330754/14/ms_banner_img2.jpg?v=2912',
    },
    {
      id: '3',
      src: 'https://theme.hstatic.net/1000251698/1000330754/14/ms_banner_img3.jpg?v=2912',
    },
    {
      id: '4',
      src: 'https://theme.hstatic.net/1000251698/1000330754/14/ms_banner_img4.jpg?v=2912',
    },
  ];
  ngOnInit(): void {}
}
