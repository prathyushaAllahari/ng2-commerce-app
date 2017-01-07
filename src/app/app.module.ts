import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { appRouting } from './app.routing';

import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AdminComponent} from './admin/admin.component';
import {ManageroleComponent} from './manageroles/managerole.component';
import {AddroleComponent} from './manageroles/addrole/addrole.component';
import {EditroleComponent} from './manageroles/editrole/editrole.component';
import {ViewroleComponent} from './manageroles/viewrole/viewrole.component';
import {ManageuserComponent} from './manageusers/manageuser.component';
import {CreateuserComponent} from './manageusers/createuser/createuser.component';
import {EdituserComponent} from './manageusers/edituser/edituser.component';
import {NotfoundComponent} from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    ManageroleComponent,
    AddroleComponent,
    EditroleComponent,
    ViewroleComponent,
    ManageuserComponent,
    CreateuserComponent,
    EdituserComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
