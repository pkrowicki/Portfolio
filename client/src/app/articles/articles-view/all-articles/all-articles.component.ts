import {Component, OnInit} from '@angular/core';
import {ArticlesHttpService} from "../../articles-http.service";

@Component({
  selector: 'app-all-articles',
  templateUrl: './all-articles.component.html',
  styleUrls: ['./all-articles.component.css']
})
export class AllArticlesComponent implements OnInit {

  articles = [];

  constructor(private articlesHttpService: ArticlesHttpService) {
  }

  ngOnInit() {
    this.articlesHttpService.getAllArticles().subscribe(articles => this.articles = articles);
  }

  toTop() {
    document.body.scrollTop = 0;
  }

}
