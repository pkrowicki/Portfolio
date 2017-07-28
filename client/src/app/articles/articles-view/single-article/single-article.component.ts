import {Component, Input, OnInit} from '@angular/core';
import {ArticlesHttpService} from '../../articles-http.service';


@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.css']
})
export class SingleArticleComponent implements OnInit {

  articleTitle = 'Pick an article';
  articleContent = 'Placeholder content';
  @Input()
  idArticle: number;

  constructor(private articlesHttpService: ArticlesHttpService) {
  }

  ngOnInit() {
    this.articlesHttpService.getArticle(this.idArticle).subscribe(article => {
      this.articleTitle = article.articleTitle;
      this.articleContent = article.articleContent;
    });
  }

}


