import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { AppComponent } from './app.component';
import { VisiteurModule } from './visiteur/visiteur.module';

const routes:Routes=[
  {
    path:'',redirectTo:'/visiteur',pathMatch:'full'


  },
  //chargement du module visiteur

  // {path:'visiteur', loadChildren:()=>import('./visiteur/visiteur.module').then(m=>m.VisiteurModule)}

]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    VisiteurModule,
    BrowserAnimationsModule,
    ChartModule,
    ButtonModule,

  ],
  exports:[
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
