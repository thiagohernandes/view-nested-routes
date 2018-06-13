import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component'; 
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { DetailServiceComponent } from './detail-service/detail-service.component';
import { HomeComponent } from './home/home.component';

export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'services', component: ServicesComponent, 
    children: [
      { path: 'detail/:id', component: DetailServiceComponent }
    ]
   }
];

export const routesApp: ModuleWithProviders = RouterModule.forRoot(router);
