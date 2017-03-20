import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {

  miboUrl: any = 'http://localhost:3000/';

  constructor(
    private http: Http
  ) { }

  listAll(): Promise<any> {
    let allUrl = this.miboUrl + 'v1/users/';
    return this.http.get(allUrl).toPromise().then(response => {
      console.log(response);
    });
  }

  login(user: any): Promise<any> {
    let loginUrl = this.miboUrl + 'v1/users/login';
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    let urlParams = new URLSearchParams();
    urlParams.append('username', user.name);
    urlParams.append('password', user.password);
    let body = urlParams.toString();
    return this.http.post(loginUrl, body, options)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    let errMsg: string;

    if (error instanceof Response) {

    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.log(errMsg);
    return Observable.throw(errMsg);
  }

}
