import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routing } from './app.routing';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';

import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';

import { AuthGuardService } from './shared/guards/auth-guard.service';
import { CanDeactivateService } from './shared/guards/can-deactivate.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    AdminComponent,
    MenuComponent,
    HomeComponent,
    LogoutComponent,
    RegisterComponent
   
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    Routing,
    FormsModule,
    HttpClientModule,HttpClientJsonpModule
  ],
  providers: [AuthGuardService,CanDeactivateService],
  bootstrap: [AppComponent]
})
export class AppModule { }

//https://stackblitz.com/edit/angular-imusic-app?file=src%2Fapp%2Fcore%2Fservices%2Fauth.service.ts