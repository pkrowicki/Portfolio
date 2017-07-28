import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import {UsersService} from './users.service';
import {UsersListComponent} from './users-list/users-list.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
    UsersListComponent,
  ],
  providers: [
    UsersService
  ],
  exports: [
    UsersListComponent
  ]
})
export class UsersModule { }
