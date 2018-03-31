import {Injectable} from '@angular/core';
import {AppConstants} from '../../app.constants';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EmailService {
  public headers;

  constructor(private http: Http, private appConstants: AppConstants) {
    this.headers = new Headers();
  }

  public sendEmail(name, email, subject, message, subscribe): Promise<object[]> {
    this.headers.append('Content-Type', 'application/json');
    return this.http.post(this.appConstants.sendEmailURL,
      {
        'name': name,
        'email': email,
        'subject': subject,
        'message': message,
        'subscribe': subscribe
      }, {
        headers: this.headers
      })
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
