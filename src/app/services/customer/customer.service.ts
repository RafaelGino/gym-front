import { CustomerFilterModel } from './../../models/filters/customer-filter-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseRequestService, GridSearchModel } from 'src/app/shared/services/base-request.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends BaseRequestService {


  constructor(protected http: HttpClient) {
    super(http);
    this.routeBase = 'customer'
  }

  public getAllCustomers(filterModel: CustomerFilterModel, pageIndex :number, pageSize :number): Promise<any>{
    debugger
    const request = <GridSearchModel>{
      page: pageIndex,
      pageSize : pageSize,
      search: filterModel
    }

    return this.post(this.routeBase + '/all', request)
  }
}
