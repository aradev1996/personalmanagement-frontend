import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PersonResponseModel} from '../person-response.model';

@Injectable({
  providedIn: 'root'
})
export class PersonCreateUpdateService {

  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public doUpdate(id: string, body: PersonResponseModel): Observable<PersonResponseModel> {
    return this.httpClient.put<PersonResponseModel>(this.getBaseUrl() + '/' + id, body);
  }

  public doCreate(body: PersonResponseModel): Observable<void> {
    return this.httpClient.post<void>(this.getBaseUrl() + '/create', body);
  }

  private getBaseUrl(): string {
    return `http://localhost:8080/person`;
  }

}
