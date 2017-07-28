import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {SecurityService} from '../security.service';
import {Injectable} from '@angular/core';
/**
 * Created by Pawel Krowicki on 2017-07-25.
 */

@Injectable()
export class SecurityGuard implements CanActivate {

  constructor(private router: Router, private securityService: SecurityService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.securityService.getUser() != null) {
      return true;
    } else {
      this.router.navigateByUrl('login');
      return false;
    }
  }
}
