import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {VacationResponseModel} from './vacation-response.model';

@Injectable()
export class UrlaubApiService {

  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public doGetAll(): Observable<VacationResponseModel[]> {
    return this.httpClient.get<VacationResponseModel[]>(this.getBaseUrl());
  }

  private getBaseUrl(): string {
    return `http://localhost:8080/urlaub`;
  }

}
