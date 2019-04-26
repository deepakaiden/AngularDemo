import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  httpOptions: any;

  constructor(private http: HttpClient) {

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

  }

  get (url) {
    return this.http.get(url, this.httpOptions);
  }

  post () {

  }

  delete () {

  }

  put () {

  }

  patch () {

  }

}
