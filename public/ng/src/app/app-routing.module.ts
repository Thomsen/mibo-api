import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/ng/login', pathMatch: 'full' },
  { path: 'ng/login', component: LoginComponent },
  { path: 'ng/main', component: MainComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ]
})

export class AppRoutingModule { }
