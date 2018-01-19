import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from './customer';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CustomerService {

  private customerEndpointUrl = environment.customerApi;

  constructor(private http: HttpClient) { }

  add(customer: Customer): Observable<any> {
    return this.http.post(this.customerEndpointUrl, customer, httpOptions);
  }

  getCustomers(): Observable<any> {
    return this.http.get(this.customerEndpointUrl);
  }

}
