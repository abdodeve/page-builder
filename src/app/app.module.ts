import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { PagesComponent } from './components/pages/pages.component';
import { BuilderComponent } from './components/builder/builder.component';

const appRoutes: Routes = [
  { path: 'pages', component: PagesComponent },
  { path: 'page/:id', component: BuilderComponent },
  { path: '',
    redirectTo: '/pages',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    BuilderComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
