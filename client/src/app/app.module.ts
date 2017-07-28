import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {UsersModule} from './users/users.module';
import {SecurityService} from './security/security.service';
import {Api} from './api';
import {LoginFormComponent} from './security/login-form/login-form.component';
import {FormsModule} from '@angular/forms';
import {routerModule} from './app.routing';
import {SecurityGuard} from './security/login-form/security.guard';
import {RegistrationComponent} from './security/registration/registration.component';
import {ArticlesModule} from './articles/articles.module';
import {ArticlesViewComponent} from './articles/articles-view/articles-view.component';
import {ArticlesHttpService} from './articles/articles-http.service';
import { FrontPageComponent } from './front-page/front-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SecurityModule} from './security/security.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegistrationComponent,
    ArticlesViewComponent,
    FrontPageComponent,
    NavBarComponent
  ],
  imports: [
    SecurityModule,
    BrowserModule,
    UsersModule,
    FormsModule,
    routerModule,
    ArticlesModule,
    BrowserAnimationsModule
  ],
  providers: [
    Api,
    SecurityGuard,
    ArticlesHttpService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
