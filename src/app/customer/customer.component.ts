import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: Customer[] = [];

  customer: Customer = {
    name: null,
    email: null,
    address: null
  };

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.getCustomers();
  }

  add() {
    this.customerService.add(this.customer).subscribe(() => this.getCustomers());
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe(data => {
      // console.log(data);
      this.customers = data._embedded.customers;
    });
  }

}
