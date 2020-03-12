import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserdetailsComponent } from './userdetails.component';
import { BeforeAccessService } from './before-access.service';
import { NotFoundComponent } from './not-found.component';

const MY_ROUTES : Routes = [
    {path: '', component: UsersComponent},
    {path: ':uuid', component: UserdetailsComponent, canActivate: [BeforeAccessService]}
];

@NgModule({
  declarations: [UsersComponent, UserdetailsComponent, NotFoundComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(MY_ROUTES)
  ]
})
export class UsersModule { }
