import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';
import { HilightTextDirective } from './customedirectives/HilightText-directive';
import { CustomedirectivestyleDirective } from './customedirectives/customedirectivestyle.directive';
import { IfCustomDirectiveDirective } from './customedirectives/if-custom-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    AddUserComponent,
    HilightTextDirective,
    CustomedirectivestyleDirective,
    IfCustomDirectiveDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
