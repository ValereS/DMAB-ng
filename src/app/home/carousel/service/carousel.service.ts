import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { IArticle } from '../i-article';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { HttpResponse } from '@angular/common/http/src/response';

@Injectable()
export class CarouselService {

  private _articlesUrl = '../../../../assets/stubs/stubArticles.json';

  constructor(private _http: HttpClient) { }

  public getArticles(): Observable<IArticle> {
    const httpOptions = { headers: new HttpHeaders({
        'Content-Type':  'application/json'})};
    return this._http.get<IArticle>(this._articlesUrl);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  }
}
