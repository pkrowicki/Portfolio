import {Injectable} from '@angular/core';
import {Http, RequestOptions, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Api} from '../api';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/do';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {User} from "./user";

@Injectable()
export class SecurityService {

  user: Observable<User>

  private authorizationHeader = 'Authorization'
  private userKey = 'user'
  private tokenKey = 'token'
  private tokenType = 'bearer'
  private userSubject = new BehaviorSubject<User>(null)

  constructor(private http: Http, private requestOptions: RequestOptions, private api: Api) {
    this.user = this.userSubject.asObservable()
    this.restoreSecurityContext()
  }

  private restoreSecurityContext() {
    let token = sessionStorage.getItem(this.tokenKey)
    if (token) {
      this.setToken(token)
    }
    let user = sessionStorage.getItem(this.userKey)
    if (user) {
      this.userSubject.next(JSON.parse(user))
    }
  }

  getUser(): User {
    return this.userSubject.getValue()
  }

  login(username: string, password: string): Observable<User> {
    let credentials = this.prepareCredentials(username, password)
    return this.retrieveToken(credentials)
      .do(token => this.setToken(token))
      .flatMap(() => this.retrieveUser())
      .do(user => this.setUser(user))
  }

  private prepareCredentials(username: string, password: string): URLSearchParams {
    let payload = new URLSearchParams()
    payload.set('username', username)
    payload.set('password', password)
    payload.set('grant_type', 'password')
    payload.set('client_id', 'connect-app')
    return payload
  }

  private retrieveToken(payload: URLSearchParams): Observable<string> {
    return this.http.post(this.api.oauthServer, payload)
      .map(response => response.json())
      .map(json => json.access_token)
  }

  private setToken(token: string) {
    sessionStorage.setItem(this.tokenKey, token)
    this.requestOptions.headers.set(this.authorizationHeader, `${this.tokenType} ${token}`)
  }

  private retrieveUser(): Observable<User> {
    return this.http.get(this.api.activeUser)
      .map(response => response.json())
      .map(json => new User(json))
  }

  private setUser(user: User) {
    sessionStorage.setItem(this.userKey, JSON.stringify(user))
    this.userSubject.next(user)
  }

  logout() {
    this.removeToken()
    this.userSubject.next(null)
  }

  private removeToken() {
    sessionStorage.removeItem(this.tokenKey)
    this.requestOptions.headers.delete(this.authorizationHeader)
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
