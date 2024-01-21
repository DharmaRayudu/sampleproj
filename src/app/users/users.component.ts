import {
  Component,
  OnChanges,
  OnInit,
  SimpleChange,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class UsersComponent {
  isAvailable: boolean = true;
  userName: string;

  users: string[] = [];
  //userList=[];// we declare array like this also
  value: string = '';

  addUser(event: string) {
    this.users.push(event);
    console.log(this.users);
  }

  constructor() {
    console.log('From constructor...');
  }

  ngOnInit() {
    console.log('From ngOnInit....');
  }

  ngOnChanges(element: SimpleChange) {
    console.log('ngOnChanges called....');
  }
}
