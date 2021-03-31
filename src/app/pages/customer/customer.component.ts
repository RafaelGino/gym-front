import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { UtilService } from 'src/app/shared/services/util.service';

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

  desserts: Dessert[] = [
    {name: 'Frozen yogurt', calories: 159, fat: 6, carbs: 24, protein: 4},
    {name: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4},
    {name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6},
    {name: 'Cupcake', calories: 305, fat: 4, carbs: 67, protein: 4},
    {name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4},
  ];

  sortedData: Dessert[];
  constructor(private utilService: UtilService) {
    this.sortedData = this.desserts.slice();
  }

  ngOnInit(): void {
  }

  sortData(sort: Sort) {
    const data = this.desserts.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return this.utilService.compare(a.name, b.name, isAsc);
        case 'calories': return this.utilService.compare(a.calories, b.calories, isAsc);
        case 'fat': return this.utilService.compare(a.fat, b.fat, isAsc);
        case 'carbs': return this.utilService.compare(a.carbs, b.carbs, isAsc);
        case 'protein': return this.utilService.compare(a.protein, b.protein, isAsc);
        default: return 0;
      }
    });
  }
}



interface Food {
  value: string;
  viewValue: string;
}
export interface Dessert {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}
