import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BaseRequestService {
  protected routeBase: string;

  constructor(protected http: HttpClient) {
  }

  protected getApiUrl(route: string): string {
    return `${environment.WEBAPI_URL}/${route}`;
  }

  protected get(route: string): Promise<any> {
    const url = this.getApiUrl(route);

    return this.http.get(url).toPromise();
  }

  protected post(route: string, body: any): Promise<any> {
    const url = this.getApiUrl(route);
    return this.http.post(url, body).toPromise();
  }

  protected put(route: string, body: any): Promise<ApiModel> {
    const url = this.getApiUrl(route);
    return this.http.put(url, body).toPromise() as Promise<ApiModel>;
  }

  protected delete(route: string, options?: any): Promise<any> {
    const url = this.getApiUrl(route);

    return this.http.delete(url, options).toPromise();
  }

  protected observableGet<T>(route: string): Observable<T> {
    const url = this.getApiUrl(route);

    return this.http.get(url).pipe(
      map((apiReturn: ApiModel) => apiReturn.data as T)
    );
  }

  requestGridSearch(filterModel: any, pageIndex: number, pageSize: number): GridSearchModel {
    return {
      page: pageIndex,
      pageSize: pageSize,
      search: filterModel
    };
  }

}

export class ApiModel {
  public data: any;
  public messages: string[];
  public success: boolean;
}

export enum TypeMessageEnum {
  Success = 'S'.charCodeAt(0),
  Error = 'E'.charCodeAt(0),
  Info = 'I'.charCodeAt(0),
  Warn = 'W'.charCodeAt(0)
}

export class GridSearchModel {
  public search;
  public page: number;
  public pageSize: number;

  constructor(
    page: number,
    pageSize: number,
    search
  ) {
    this.page = page;
    this.pageSize = pageSize;
    this.search = search;
  }
}
