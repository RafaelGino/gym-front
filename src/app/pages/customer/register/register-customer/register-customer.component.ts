import { Component, OnInit } from '@angular/core';
import {FormControl} from  '@angular/forms' ;

@Component({
  selector: 'register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.scss']
})
export class RegisterCustomerComponent implements OnInit {
  control = new FormControl ();

  constructor() { }

  ngOnInit(): void {
  }

}
