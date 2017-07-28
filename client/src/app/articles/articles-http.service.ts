import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Article} from './article';
import {Api} from '../api';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toArray';

import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';




@Injectable()
export class ArticlesHttpService {

  constructor(private http: Http, private api: Api) {
  }

  addArticle(article: any): Observable<any> {
    return this.http.post(this.api.articles, article);
  }


  getArticle(id: number): Observable<Article> {

    return this.http.get(this.api.articles + '/' + id)
      .map(response => response.json())
      .map(json => new Article(json));
  }

  getAllArticles(): Observable<[Article]> {
    return this.http.get(this.api.articles)
      .map(response => response.json())
      .flatMap(article => article)
      .map(article => new Article(article))
      .toArray();
  }

  saveArticle(article: any): Observable<any> {
    console.log(article);
    return this.http.post(this.api.articles, article);
  }

}
