import {LoginFormComponent} from './security/login-form/login-form.component';
import {RouterModule} from '@angular/router';
import {SecurityGuard} from './security/login-form/security.guard';
import {RegistrationComponent} from './security/registration/registration.component';
import {ArticlesViewComponent} from './articles/articles-view/articles-view.component';
import {FrontPageComponent} from './front-page/front-page.component';

/**
 * Created by Pawel Krowicki on 2017-07-25.
 */

const routesConfig = [
  {
    path: 'login', component: LoginFormComponent, title: 'Please, log in and pray that it works'
  },
  {
    path: 'registration', component: RegistrationComponent, title: 'Feel free to register ;)'
  },
  {
    path: '', component: FrontPageComponent
  },
  {
    path: 'frontpage', component: FrontPageComponent, title: 'Welcome to AnguJava homepage!'
  },
  {
    path: 'article', component: ArticlesViewComponent, canActivate: [SecurityGuard], title: 'Some articles, maybe?'
  }
];

export const routerModule = RouterModule.forRoot(routesConfig);
