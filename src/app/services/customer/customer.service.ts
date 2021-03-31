import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseRequestService } from 'src/app/shared/services/base-request.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends BaseRequestService {

  constructor(protected http: HttpClient) {
    super(http);
  }
}
