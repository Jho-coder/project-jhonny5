import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatchValidatorComponent } from './match-validator/match-validator.component';
import { ModuleComponent } from './module/module.component';
import { DetallesComponent } from './detalles/detalles.component';
import { Component2Component } from './component2/component2.component';
import { MuestrasComponent } from './muestras/muestras.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    MatchValidatorComponent,
    ModuleComponent,
    DetallesComponent,
    Component2Component,
    MuestrasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
