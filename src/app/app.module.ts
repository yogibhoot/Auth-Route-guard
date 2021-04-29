import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AdminlistComponent } from './admin/adminlist/adminlist.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { LoginComponent } from './login/login.component';
import { ChildGuard } from './guards/child.guard';
import { DetailComponent } from './admin/profile/detail/detail.component';
import { PrivacyComponent } from './admin/profile/privacy/privacy.component';
import { ListComponent } from './admin/adminlist/list/list.component';
import { EditComponent } from './admin/adminlist/edit/edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeauthGuard } from './guards/deauth.guard';
import { HttpClientModule } from '@angular/common/http';
import { ResolveGuard } from './guards/resolve.guard';
import { UdetailComponent } from './admin/adminlist/udetail/udetail.component';
import { CuscanloadGuard } from './guards/cuscanload.guard';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminlistComponent,
    ProfileComponent,
    DashboardComponent,
    LoginComponent,
    DetailComponent,
    PrivacyComponent,
    ListComponent,
    EditComponent,
    UdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [AuthGuardGuard, ChildGuard, DeauthGuard, ResolveGuard, CuscanloadGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
