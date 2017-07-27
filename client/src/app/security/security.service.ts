import {Injectable} from '@angular/core';
import {Http, RequestOptions, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Api} from '../api';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/do';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class SecurityService {

  events: Observable<any>;

  private authenticationEvents = new BehaviorSubject<any>(1);

  constructor(private http: Http, private requestOptions: RequestOptions, private api: Api) {
    this.events = this.authenticationEvents.asObservable();
  }

  isAuthenticated() {
    return this.authenticationEvents.getValue();
  }

  login(username: string, password: string): Observable<boolean> {
    const payload = this.preparePayload(username, password);
    return this.http.post(this.api.oauthServer, payload)
      .map(response => response.json())
      .map(json => json.access_token)
      .do(token => this.onLoginSuccess(token))
      .mapTo(true);
  }

  logout() {
    this.removeAuthorizationHeader();
    this.authenticationEvents.next(false);
  }

  register(username: string, password: string) {
    const payload = this.prepareRegisterPayload(username, password);
    this.http.post('http://localhost:8080/api-v1/users', {
      login: username,
      password: password
    }).
    subscribe(response => console.log(response));
    // return this.http.get(this.api.oauthServer, payload);
  }

  private removeAuthorizationHeader() {
    this.requestOptions.headers.delete('Authorization');
  }

  private onLoginSuccess(token: string) {
    this.setAuthorizationToken(token);
    this.authenticationEvents.next(true);
  }

  private setAuthorizationToken(token: string) {
    this.requestOptions.headers.set('Authorization', `Bearer ${token}`);
  }

  private preparePayload(username: string, password: string): URLSearchParams {
    const payload = new URLSearchParams();
    payload.set('username', username);
    payload.set('password', password);
    payload.set('grant_type', 'password');
    payload.set('client_id', 'connect-app');
    return payload;
  }

  private prepareRegisterPayload(username: string, password: string): URLSearchParams {
    const payload = new URLSearchParams();
    payload.set('username', username);
    payload.set('password', password);
    return payload;
  }

}
