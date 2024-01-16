import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes:Routes=[
  {
    path:'',redirectTo:'/visiteur',pathMatch:'full'


  },
  //chargement du module visiteur

  {path:'visiteur', loadChildren:()=>import('./visiteur/visiteur.module').then(m=>m.VisiteurModule)}

]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
