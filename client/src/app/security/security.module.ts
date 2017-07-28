import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginFormComponent} from './login-form/login-form.component';
import {FormsModule} from '@angular/forms';
import {SecurityService} from './security.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
  ],
  providers: [
    SecurityService
  ],
  exports: [
  ]
})
export class SecurityModule {
}
