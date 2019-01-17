import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from './home/home.component';     // Add your component here
// import { AboutComponent } from './about/about.component';  // Add your component here

const routes: Routes = [
    {
      path: '',
      loadChildren: './dashboard/dashboard.module#DashboardModule'
    },
    {
      path: 'builder',
      loadChildren: './builder/builder.module#BuilderModule'
    },
    {
      path: 'dashboard',
      loadChildren: './dashboard/dashboard.module#DashboardModule'
    },
    {
      path: 'login',
      loadChildren: './login/login.module#LoginModule'
    },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }