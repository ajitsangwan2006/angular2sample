import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { CustomerDetailComponent } from './customer/customer-detail.component';
import { CustomerService } from './customer/customer.service';
import { CustomersComponent } from './customer/customers.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'customers',
        component: CustomersComponent
      }
   ])
  ],
  declarations: [ AppComponent, CustomerDetailComponent, CustomersComponent ],
  providers: [
    CustomerService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


