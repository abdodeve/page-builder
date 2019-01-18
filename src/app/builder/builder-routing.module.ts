import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuilderComponent } from './builder/builder.component';


const routes: Routes = [
  // { path: '',
  //   redirectTo: '/dashboard',
  //   pathMatch: 'full'
  // },
  // { path: ':page_name', component: BuilderComponent },
  // { path: '**', redirectTo: '/dashboard'}

  {
    path: 'builder',
    children: [
      {
        path: ':page_name',
        component: BuilderComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuilderRoutingModule { }
