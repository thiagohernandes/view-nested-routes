import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';

import { routesApp } from './app.router';
import { DetailServiceComponent } from './detail-service/detail-service.component';
import { ServicosService } from './servicos/service-servicos';
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    AboutComponent,
    ServicesComponent,
    DetailServiceComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routesApp
  ],
  providers: [
    ServicosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
