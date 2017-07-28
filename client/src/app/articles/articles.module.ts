import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {SingleArticleComponent} from './articles-view/single-article/single-article.component';
import {AllArticlesComponent} from './articles-view/all-articles/all-articles.component';
import { ArticlesAddComponent } from './articles-add/articles-add.component';
import {FormsModule} from "@angular/forms";

// import { ArticlesComponent } from './articles.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule
  ],
  declarations: [
    SingleArticleComponent,
    AllArticlesComponent,
    ArticlesAddComponent
  ],
  exports: [
    SingleArticleComponent,
    AllArticlesComponent
  ]
})
export class ArticlesModule {
}
