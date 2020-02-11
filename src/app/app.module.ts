import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { CreditoFiscalComponent } from './credito-fiscal/credito-fiscal.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {PanelModule} from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CaptchaModule} from 'primeng/captcha';








@NgModule({
  declarations: [
    AppComponent,
    CreditoFiscalComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    TableModule,
    PanelModule,
    InputTextModule,
    ButtonModule,
    CaptchaModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
