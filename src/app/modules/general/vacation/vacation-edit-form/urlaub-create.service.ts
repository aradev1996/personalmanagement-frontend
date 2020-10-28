import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {VacationRequestModel} from './vacation-request.model';

@Injectable({
  providedIn: 'root'
})
export class UrlaubCreateService {

  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public doCreate(body: VacationRequestModel): Observable<void> {
    return this.httpClient.post<void>(this.getBaseUrl() + '/create', body);
  }

  private getBaseUrl(): string {
    return `http://localhost:8080/urlaub`;
  }

}
