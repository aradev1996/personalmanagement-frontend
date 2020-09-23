import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PersonResponseModel} from './person-response.model';

@Injectable()
export class PersonApiService {

  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public doGetAll(): Observable<PersonResponseModel[]> {
    return this.httpClient.get<PersonResponseModel[]>(this.getBaseUrl());
  }


  public doDelete(id: string): Observable<void> {
    return this.httpClient.delete<void>(this.getBaseUrl() + '/' + id);
  }

  private getBaseUrl(): string {
    return `http://localhost:8080/person`;
  }

}
