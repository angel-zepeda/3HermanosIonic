import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-tiendas-gerentes',
  templateUrl: 'tiendas-gerentes.html',
})
export class TiendasGerentesPage {

  user = localStorage.getItem('user_shops');
  shops: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {

  }

  ionViewDidLoad() {
    this.http.post('http://157.230.81.230:5000/api/shops/gerente', { shops: JSON.parse(this.user) })
      .subscribe(res => {
        this.shops = res;
        this.shops = this.shops.shops;
      })
  }

  inicio(shop_id, name, shop_number) {
    this.navCtrl.push('ReporteoPage');
    localStorage.setItem('name', name);
    localStorage.setItem('shop_id', shop_id);
    localStorage.setItem('shop_number', shop_number);
  }
}
