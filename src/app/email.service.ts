import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Email } from './email';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EmailService {

  private emailEndpointUrl = environment.mailApi;

  constructor(private http: HttpClient) { }

  send(email: Email): Observable<any> {
    return this.http.post(this.emailEndpointUrl, email, httpOptions);
  }

}
