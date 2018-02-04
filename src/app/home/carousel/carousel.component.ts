import { Component, OnInit } from '@angular/core';
import { CarouselService } from './service/carousel.service';
import { IArticle } from './i-article';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  public articles: IArticle;

  constructor(private _carouselServ: CarouselService) {

  }

  ngOnInit() {
    this.showArticles();
  }

  showArticles() {
    this._carouselServ.getArticles().subscribe(
      data => {
        this.articles = data;
      }
    );
  }
}
