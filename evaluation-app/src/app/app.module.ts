import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppCoreComponent } from './app-core/app-core.component';

import { MaterialDesignModule } from './design/material.design';
import { APP_PRIMENG_MODULE, APP_PRIMENG_PROVIDERS } from './design/prime-ng.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AppCoreComponent,
    LoginComponent
  ],
  imports: [
    APP_PRIMENG_MODULE,
    MaterialDesignModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
		APP_PRIMENG_PROVIDERS
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
