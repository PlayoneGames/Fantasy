import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {RequestOptions, RequestMethod} from '@angular/http';
import 'rxjs/add/operator/map';
//import { forkJoin } from 'rxjs/Rx';

const apiUrl = "http://192.168.2.178:3000/";

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient) { }

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
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  
  postRequest(formValues, ApiName): Observable<any> {

    //let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    //let options = { headers: headers};
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
       }),
        observe: 'response'
     };
    return this.http.post<any>(apiUrl+ApiName, JSON.stringify(formValues),{
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      observe: 'response'
    })
              //  .map((response) =>  response,
              //  error => error.json('error in response from server'))
               .map(response=>{
                //if(response){
                  console.log("response from server", response);
                  // console.log("response header from server", response.headers.get("x-access-token"));
                  // console.log("response header from server", response.headers.get("x-key"));
                  
                  //localStorage.setItem("isLogged",res);
                //}
                return response;
              });
  }
}
