import {Component, Inject, OnInit} from '@angular/core';
import {Article} from "../article";
import {Observable} from "rxjs/Observable";
import {ArticlesHttpService} from "../articles-http.service";
import {SingleArticleComponent} from "./single-article/single-article.component";


import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-articles-view',
  templateUrl: './articles-view.component.html',
  styleUrls: ['./articles-view.component.css'],
  animations: [

  trigger('focusPanel', [
    state('inactive', style({
      transform: 'scale(1)',
      backgroundColor: '#eee'
    })),
    state('active', style({
      transform: 'scale(1.1)',
      backgroundColor: '#cfd8dc'
    })),
    transition('inactive => active', animate('100ms ease-in')),
    transition('active => inactive', animate('100ms ease-out'))
  ])
  ]
})
export class ArticlesViewComponent implements OnInit {

  idArticle: number;
  articles = [];
  artMenu: number;
  num;

  constructor(private articlesHttpService: ArticlesHttpService) {
  }

  ngOnInit() {
  }

  setNum(num) {
    this.num = num;
  }

  setNum2(num, idArticle) {
    this.num = num;
    this.idArticle = idArticle;
  }

  showTestArticle(idArticle, artMenu) {
    this.idArticle = idArticle;
    this.artMenu = artMenu;
  }

  showAllArticles(artMenu) {
    this.artMenu = artMenu;
    console.log(this.artMenu);
    // this.articlesHttpService.getAllArticles().subscribe(articles => this.articles = articles);

  }
}
