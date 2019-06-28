import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private httpclient: HttpClient) {}
  getProductInformation(): Observable<any> {
    return this.httpclient.get('http://www.searchupc.com/handlers/upcsearch.ashx?request_type=3&access_token=6E59B41D-99F4-4CC2-B92B-C09DB93A76CD&upc=8713439221251');
  }
}
