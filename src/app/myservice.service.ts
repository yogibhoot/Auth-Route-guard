import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})

export class MyserviceService {

  _url = "https://jsonplaceholder.typicode.com/todos";

  constructor(private router: Router, private http: HttpClient) { }

  checkusernameandpassword(uname : string, pwd : string)
  {
    if(uname == "admin"  && pwd == "admin123")
    {
      localStorage.setItem('username',"admin");
      return true;
    }
    else
    {
      return false;
    }
  }

  getUserlist(): Observable<User> {
    return this.http.get<User>(this._url)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getUser(id : any): Observable<User> {
    return this.http.get<User>(this._url  +"/"+ id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  logout()
  {
    localStorage.removeItem('username');
    this.router.navigate(['']);
  }

  get islogin()
  {
    return true;
  }

  handleError(error : any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      console.warn('client-side error');
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      console.warn('server-side error');
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }

}
