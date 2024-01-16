import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { SideBarComponent } from './accueil/side-bar/side-bar.component';
import { BodyComponent } from './accueil/sub_body/body/body.component';
import { FooterComponent } from './accueil/sub_body/footer/footer.component';
import { HeaderComponent } from './accueil/sub_body/header/header.component';


const routes:Routes=[

  {path:'visiteur',component:AccueilComponent}
]


@NgModule({
  declarations: [
    SideBarComponent,

    BodyComponent,
    FooterComponent,
    HeaderComponent,
    AccueilComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class VisiteurModule { }
