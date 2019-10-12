import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TiendasGerentesPage } from './tiendas-gerentes';

@NgModule({
  declarations: [
    TiendasGerentesPage,
  ],
  imports: [
    IonicPageModule.forChild(TiendasGerentesPage),
  ],
})
export class TiendasGerentesPageModule {}
