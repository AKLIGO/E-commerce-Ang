import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { AccueilComponent } from './accueil/accueil.component';
import { ProduitsComponent } from './accueil/produits/produits.component';
import { SideBarComponent } from './accueil/side-bar/side-bar.component';
import { BodyComponent } from './accueil/sub-body/body/body.component';
import { FooterComponent } from './accueil/sub-body/footer/footer.component';
import { HeaderComponent } from './accueil/sub-body/header/header.component';


const routes: Routes = [
  { path: 'visiteur',
  component: AccueilComponent,
  children: [
    { path: 'produits', component: ProduitsComponent }
  ] },



];

@NgModule({
  declarations: [
    SideBarComponent,
    BodyComponent,
    FooterComponent,
    HeaderComponent,
    AccueilComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BrowserAnimationsModule,
    ChartModule,
    ButtonModule
  ],
  exports: [
    RouterModule
  ]
})
export class VisiteurModule { }
