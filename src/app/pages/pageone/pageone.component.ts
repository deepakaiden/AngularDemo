import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pageone',
  templateUrl: './pageone.component.html',
  styleUrls: ['./pageone.component.scss']
})
export class PageoneComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser () {
    this.userService.getUser().subscribe(users => {
      console.log('User is::::::::::::::::::::', users);
    }, error => {
      console.log('Error while getting user:::', error);
    });
  }

}
