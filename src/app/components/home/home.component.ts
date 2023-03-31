import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/service/user-service.service';
import { AgeFilterPipe } from 'src/app/pipe/age-filter.pipe';
import { User } from 'src/app/user';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  users: User[] = [];

  constructor(private userService: UserServiceService) { }

  ngOnInit(){
    this.userService.getAllUsers().subscribe((users) => {
      this.users = users;
      console.log(this.users); 
    });
  }
}
