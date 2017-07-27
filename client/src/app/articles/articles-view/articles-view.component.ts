import {Component, Inject, OnInit} from '@angular/core';
import {Article} from "../article";
import {Observable} from "rxjs/Observable";
import {ArticlesHttpService} from "../articles-http.service";

@Component({
  selector: 'app-articles-view',
  templateUrl: './articles-view.component.html',
  styleUrls: ['./articles-view.component.css']
})
export class ArticlesViewComponent implements OnInit {

  title = 'Pick and article';
  content = 'Placeholder content';
  articles = [];

  constructor(private articlesHttpService: ArticlesHttpService) {
  }

  ngOnInit() {
  }

  showTestArticle(id) {
    this.articlesHttpService.getArticle(id).subscribe(article => {
      this.title = article.title;
      this.content = article.content;
    });
  }

  showAllArticles() {
    this.articlesHttpService.getAllArticles().subscribe(articles => this.articles = articles);

  }

}
