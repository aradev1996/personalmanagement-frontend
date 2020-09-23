import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PersonResponseModel} from '../person-list/person-response.model';
import {PersonStatisticModel} from './person-statistic.model';

@Injectable()
export class PersonStatisticsApiService {

  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }


  public doGetAll(): Observable<PersonStatisticModel> {
    return this.httpClient.get<PersonStatisticModel>(this.getBaseUrl());
  }

  private getBaseUrl(): string {
    return `http://localhost:8080/person/statistic`;
  }

}
