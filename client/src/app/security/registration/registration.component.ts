import {Component} from '@angular/core';
import {SecurityService} from '../security.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {


  username: string;
  password: string;
  registerError: boolean;
  pendingRequest = false;

  constructor(private securityService: SecurityService, private router: Router) {
  }

  register() {
    this.pendingRequest = true;
    this.securityService.register(this.username, this.password)
      // .subscribe(() => {
      //   this.router.navigateByUrl('/');
      //   console.log(this.securityService.isAuthenticated());
      // }, () => {
      //   this.registerError = true;
      //   this.pendingRequest = false;
      // });
  }


}
