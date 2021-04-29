import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminlistComponent } from './admin/adminlist/adminlist.component';
import { EditComponent } from './admin/adminlist/edit/edit.component';
import { ListComponent } from './admin/adminlist/list/list.component';
import { UdetailComponent } from './admin/adminlist/udetail/udetail.component';
import { DetailComponent } from './admin/profile/detail/detail.component';
import { PrivacyComponent } from './admin/profile/privacy/privacy.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { ChildGuard } from './guards/child.guard';
import { CuscanloadGuard } from './guards/cuscanload.guard';
import { DeauthGuard } from './guards/deauth.guard';
import { ResolveGuard } from './guards/resolve.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path : '', component: DashboardComponent},
  {path : 'login', component: LoginComponent},
  {path : 'admin', canActivate:[AuthGuardGuard], component: AdminComponent,  
  children:[
    {path: 'adminlist', component:AdminlistComponent,
    children:[
      {path:'list', component:ListComponent, resolve: {data : ResolveGuard}},
      {path:'edit', component:EditComponent, canDeactivate:[DeauthGuard]},
      {path:'udetail/:id', component:UdetailComponent}
    ]},
    {path: 'profile', component:ProfileComponent, canActivateChild:[ChildGuard],
    children:[
      {path:'detail', component:DetailComponent},
      {path:'privacy', component:PrivacyComponent}
    ]}
  ]},
  {path:'customer', 
    canLoad:[CuscanloadGuard],
    loadChildren:() => import ('./customer/customer.module').then(m=>m.CustomerModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
