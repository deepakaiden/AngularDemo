import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }

  getUser () {
    // const url = 'http://localhost:3000/users';
    const url = '../../../assets/users.json';
    return this.httpService.get(url);
  }

}
