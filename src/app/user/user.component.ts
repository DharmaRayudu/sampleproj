import { Component, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  //@Input() userName: string;

  @Input() userList: string[] = [];

  ngOnChanges(element: SimpleChange) {
    console.log('ngOnChanges called....' + element);
  }
}
