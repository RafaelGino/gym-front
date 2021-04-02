import { RegisterCustomerComponent } from './pages/customer/register/register-customer/register-customer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './pages/customer/customer.component';


const routes: Routes = [
  {
    path: 'customer',
    component: CustomerComponent
  },
  {
    path: 'register-customer',
    component: RegisterCustomerComponent
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
