import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { appRouting } from './app.routing';

import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {SuperadminComponent} from './superadmin/superadmin.component';
import {ManageroleComponent} from './manageroles/managerole.component';
import {AddroleComponent} from './manageroles/addrole/addrole.component';
import {EditroleComponent} from './manageroles/editrole/editrole.component';
import {ViewroleComponent} from './manageroles/viewrole/viewrole.component';
import {ManageuserComponent} from './manageusers/manageuser.component';
import {CreateuserComponent} from './manageusers/createuser/createuser.component';
import {EdituserComponent} from './manageusers/edituser/edituser.component';
import {AdminComponent} from './admin/admin.component';
import {MerchantComponent} from './merchant/merchant.component';
import {DeveloperComponent} from './developer/developer.component';
import {ResellerComponent} from './reseller/reseller.component';
import {NotfoundComponent} from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SuperadminComponent,
    ManageroleComponent,
    AddroleComponent,
    EditroleComponent,
    ViewroleComponent,
    ManageuserComponent,
    CreateuserComponent,
    EdituserComponent,
    AdminComponent,
    MerchantComponent,
    DeveloperComponent,
   ResellerComponent,
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
