import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/app/models/customer';
import { CustomerFilterModel } from 'src/app/models/filters/customer-filter-model';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { CustomPaginator } from 'src/app/shared/models/custom-paginator';
import { UtilService } from 'src/app/shared/services/util.service';

@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  dataSource: MatTableDataSource<Customer>;
  customers: Array<Customer>;
  filterModel: CustomerFilterModel;
  totalCustomers = 0;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  displayedColumns: Array<string> = ['nome', 'contato', 'idade', 'modalidade']

  constructor(
    private utilService: UtilService,
    private customerService: CustomerService,
    private customPaginator: CustomPaginator,) {
    this.filterModel = {
      firstName: ''
    }
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Customer>(this.customers);
    this.dataSource.paginator = this.paginator;
    this.paginator._intl = this.customPaginator;
    this.paginator.pageIndex = 0;
    this.getCustomers();
  }

  ngAfterViewInit() {

  }

  private async getCustomers(resetPage: boolean = true) {
    if (resetPage)
      this.paginator.pageIndex = 0;

    const returnedPromise = await this.customerService.getAllCustomers(this.filterModel, this.paginator.pageIndex, this.paginator.pageSize);
    this.customers = returnedPromise.data.items.map(e => { return e as Customer });
    this.dataSource = new MatTableDataSource<Customer>(this.customers);
    console.log(this.customers)
    this.totalCustomers = this.dataSource.data.length;
  }

  public changePage() {
    this.getCustomers(false);
  }
}
