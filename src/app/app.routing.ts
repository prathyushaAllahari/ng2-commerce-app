import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import {ViewuserComponent} from './manageusers/viewuser/viewuser.component';
import {AdminComponent} from './admin/admin.component';
import {MerchantComponent} from './merchant/merchant.component';
import {DeveloperComponent} from './developer/developer.component';
import {AddproductComponent} from './developer/addproduct/addproduct.component';
import {DetailsComponent} from './developer/addproduct/details/details.component';
import {InventoryComponent} from './developer/addproduct/inventory/inventory.component';
import {CustomfieldsComponent} from './developer/addproduct/customfields/customfields.component';
import {DeliveryComponent} from './developer/addproduct/delivery&eventdate/delivery.component';
import {BulkpricingComponent} from './developer/addproduct/bulkpricing/bulkpricing.component';
import {ResellerComponent} from './reseller/reseller.component';
import {NotfoundComponent} from './not-found/not-found.component';



const appRoutes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'register',component:RegisterComponent},
    {path:'superadmin',component:SuperadminComponent},
    {path: 'managerole',component:ManageroleComponent},
    {path: 'addrole',component:AddroleComponent},
    {path: 'editrole',component:EditroleComponent},
    {path: 'viewrole',component:ViewroleComponent},
    {path: 'manageuser',component:ManageuserComponent},
    {path: 'createuser',component:CreateuserComponent},
    {path: 'edituser',component:EdituserComponent},
    {path: 'viewuser',component:ViewuserComponent},
    {path: 'admin',component:AdminComponent},
    {path: 'merchant',component:MerchantComponent},
    {path: 'developer',component:DeveloperComponent},
    {path: 'addproduct',component:AddproductComponent},
    {path: 'details',component:DetailsComponent},
     {path: 'inventory',component:InventoryComponent},
     {path: 'customfields',component:CustomfieldsComponent},
     {path: 'delivery&eventdate',component:DeliveryComponent},
     {path: 'bulkpricing',component:BulkpricingComponent},
    {path: 'reseller',component:ResellerComponent},
    { path: '**', component: NotfoundComponent }

];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);