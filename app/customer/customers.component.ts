import { Customer } from './customer';
import { CustomerService } from './customer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-customers',
  template: `
    <h1>{{title}}</h1>
    <h2>My Customers</h2>
    <ul class="customers">
      <li *ngFor="let customer of customers"
        [class.selected]="customer === selectedCustomer"
        (click)="onSelect(customer)">
        <span class="badge">{{customer.id}}</span> {{customer.name}}
      </li>
    </ul>
    <customer-detail [customer]="selectedCustomer"></customer-detail>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .customers {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .customers li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .customers li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .customers li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .customers .text {
      position: relative;
      top: -3px;
    }
    .customers .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
  providers: [CustomerService]
})
export class CustomersComponent implements OnInit {
  title = 'Tour of Customers';
  customers: Customer[];
  selectedCustomer: Customer;
  constructor(private customerService: CustomerService) { }
  getCustomers(): void {
    this.customerService.getCustomers().then(customers => this.customers = customers);
  }
  ngOnInit(): void {
    this.getCustomers();
  }
  onSelect(customer: Customer): void {
    this.selectedCustomer = customer;
  }
}
