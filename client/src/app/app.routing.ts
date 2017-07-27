import {LoginFormComponent} from './security/login-form/login-form.component';
import {RouterModule} from '@angular/router';
import {SecurityGuard} from "./security/login-form/security.guard";
import {RegistrationComponent} from "./security/registration/registration.component";
import {ArticlesViewComponent} from './articles/articles-view/articles-view.component';
import {FrontPageComponent} from "./front-page/front-page.component";

/**
 * Created by Pawel Krowicki on 2017-07-25.
 */

const routesConfig = [
  {
    path: 'login', component: LoginFormComponent
  },
  {
    path: 'registration', component: RegistrationComponent
  },
  {
    path: '/', redirectTo: 'frontpage', canActivate: [SecurityGuard]
  },
  {
    path: 'frontpage', component: FrontPageComponent
  },
  {
    path: 'article', component: ArticlesViewComponent
  }
];

export const routerModule = RouterModule.forRoot(routesConfig);
