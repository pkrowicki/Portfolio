/**
 * Created by Pawel Krowicki on 2017-07-25.
 */

export class Api {
  oauthServer = 'http://localhost:8080/oauth/token';
  articles = 'http://localhost:8080/api-v1/articles';
  users = `http://localhost:8080/api-v1/users`;
  activeUser = `${this.users}/active`;
}
