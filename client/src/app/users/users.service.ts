import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Api } from '../api';
import 'rxjs/add/operator/map';
import {User} from "../security/user";

@Injectable()
export class UsersService {

  constructor(private http: Http, private api: Api ) {
  }

  getActiveUser(): Observable<any> {
    return this.http.get(this.api.activeUser)
      .map(response => response.json());
  }

  getAll(): Observable<[User]> {
    return this.http.get(this.api.users)
      .map(response => response.json())
      .map(page => page.users)
      .flatMap(users => users)
      .map(user => new User(user))
      .toArray()
  }

}
