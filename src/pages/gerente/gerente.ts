import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-gerente',
  templateUrl: 'gerente.html',
})
export class GerentePage {

  username = localStorage.getItem('username');
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  buscarTienda(historialPage) {
    if (historialPage !== undefined) {
      localStorage.setItem('page', historialPage);
    }
    this.navCtrl.push('TiendasGerentesPage');
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GerentePage');
  }

}
