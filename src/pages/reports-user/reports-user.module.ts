import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReportsUserPage } from './reports-user';

@NgModule({
  declarations: [
    ReportsUserPage,
  ],
  imports: [
    IonicPageModule.forChild(ReportsUserPage),
  ],
})
export class ReportsUserPageModule {}
