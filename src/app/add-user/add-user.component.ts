import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  //Child component

  //To send data from child to parent
  /**
   * To send data from child to parent
   * 1. create an Eventemitter
   */
  @ViewChild('inputUserName') userInput: ElementRef;

  @Output() userData = new EventEmitter<string>();
  userName: string;
  //inputUserName: HTMLInputElement
  addUser() {
    console.log(this.userInput.nativeElement.value);
    this.userData.emit(this.userInput.nativeElement.value);
  }
}
