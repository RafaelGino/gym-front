import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Ativo'},
    {value: 'pizza-1', viewValue: 'Inativo'},

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
interface Food {
  value: string;
  viewValue: string;
}
