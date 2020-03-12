import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './users/not-found.component';

const MY_ROUTES : Routes = [
  {
    path: 'users', 
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
  },
  {
    path: 'notfound',
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(MY_ROUTES),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
