import { Customer } from './customer';
import { CUSTOMERS } from './mock-cutomers';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {
   getCustomers(): Promise<Customer[]> {
    return Promise.resolve(CUSTOMERS);
   }
}
