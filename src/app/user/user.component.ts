import { UserData } from './Data/user.data';
import { User } from './model/user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  user:User[];

  constructor(){
    this.user=UserData
  }

}
