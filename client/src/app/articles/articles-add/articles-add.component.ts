import {Component, Input, OnInit, Output} from '@angular/core';
import {ArticlesHttpService} from "../articles-http.service";

@Component({
  selector: 'app-articles-add',
  templateUrl: './articles-add.component.html',
  styleUrls: ['./articles-add.component.css']
})
export class ArticlesAddComponent implements OnInit {

  private article = {
    articleTitle: '',
    articleContent: ''
  };

  constructor( private articlesHttpService: ArticlesHttpService) {
  }

  ngOnInit() {
  }

  save(articleForm) {
    console.log(this.article);
    this.articlesHttpService.saveArticle(this.article).subscribe(() => {});
  }

}
