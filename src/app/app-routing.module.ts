import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisiteurModule } from './visiteur/visiteur.module';
const routes:Routes=[
  {
    path:'',redirectTo:'/visiteur',pathMatch:'full'


  },
  //chargement du module visiteur

  // {path:'visiteur', loadChildren:()=>import('./visiteur/visiteur.module').then(m=>m.VisiteurModule)}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    VisiteurModule
  ]
})
export class AppRoutingModule { }
