import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  public articles;

  constructor() { }

  ngOnInit() {
    this.articles = [
      {title: 'premier article', creationDateT: '2018-01-01', summary: 'présentation du 1er article', image:'../../../assets/stubs/images/plantes_3_pots.jpg'},
      {title: 'deuxieme article', creationDateT: '2018-01-02', summary: 'présentation du 2eme article'},
      {title: 'troisieme article', creationDateT: '2018-01-03', summary: 'présentation du 3eme article'},
      {title: 'quatrieme article', creationDateT: '2018-01-04', summary: 'présentation du 4eme article'},
      {title: 'cinquieme article', creationDateT: '2018-01-05', summary: 'présentation du 5eme article'},
      {title: 'sixième article', creationDateT: '2018-01-05', summary: 'présentation du 6eme article'},
    ];
  }

}
