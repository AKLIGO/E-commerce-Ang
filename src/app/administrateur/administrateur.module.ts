import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminComponent } from './admin/admin.component';
import { SideBarADMINComponent } from './admin/side-bar-admin/side-bar-admin.component';
import { BodyAdminComponent } from './admin/sub-body-admin/body-admin/body-admin.component';
import { FooterAdminComponent } from './admin/sub-body-admin/footer-admin/footer-admin.component';
import { HeaderAdminComponent } from './admin/sub-body-admin/header-admin/header-admin.component';
import { SubBodyAdminComponent } from './admin/sub-body-admin/sub-body-admin.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SideBarADMINComponent,
    AdminComponent,
    SubBodyAdminComponent,
    FooterAdminComponent,
    HeaderAdminComponent,
    BodyAdminComponent,
  ]
})
export class AdministrateurModule { }
