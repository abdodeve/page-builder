import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './pageNotFound/page-not-found/page-not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';




const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: '**',   redirectTo: 'dashboard', pathMatch: 'full' },
    // {
    //   path: 'dashboard',
    //   loadChildren: './dashboard/dashboard.module#DashboardModule'
    // },
    // { path: '', component: PageNotFoundComponent },
    // { path: '**',   redirectTo: '/', pathMatch: 'full' },
    {
      path: 'builder',
      loadChildren: './builder/builder.module#BuilderModule'
    },
    {
      path: 'login',
      loadChildren: './login/login.module#LoginModule'
    },
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }