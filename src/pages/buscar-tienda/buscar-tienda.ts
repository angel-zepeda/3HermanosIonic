import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/debounceTime';


@IonicPage()
@Component({
  selector: 'page-buscar-tienda',
  templateUrl: 'buscar-tienda.html',
})

export class BuscarTiendaPage {

  urlSearch = 'http://157.230.81.230:5000/api/shops/search-shop';
  // urlSearch = 'http://localhost:5000/api/shops/search-shop';

  shops: any;
  searchQuery: string = '';
  page = localStorage.getItem("page");
  users: any;
  reports: any;
  user_id;
  search = {
    "name": ""
  }
  constructor(public loadingController: LoadingController, public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
    this.user_id = {
      id: ''
    };

  }

  ionViewDidLoad() {
    this.http.get('http://157.230.81.230:5000/api/users/index')
      .subscribe(res => {
        this.users = res;
      })
  }

  inicio(shop_id, name, shop_number) {
    this.navCtrl.push(this.page);
    localStorage.setItem('name', name);
    localStorage.setItem('shop_id', shop_id);
    localStorage.setItem('shop_number', shop_number);
  }

  filterByUser() {
    let loader = this.loadingController.create({
      content: "Buscando reportes ..."
    });
    loader.present();
    this.http.post('http://157.230.81.230:5000/api/history/reports/by-user', this.user_id)
      .subscribe(res => {
        loader.dismiss();
        this.reports = res;
        localStorage.setItem('reportsByUser', JSON.stringify(this.reports));
        this.navCtrl.push('ReportsUserPage');
      })

  }


  enviar() {
    let loader = this.loadingController.create({
      content: "Buscando Tiendas..."
    });
    loader.present();
    this.search.name = this.search.name.toLocaleUpperCase();
    console.log(this.search);
    this.http.post(this.urlSearch, this.search)
      .subscribe(res => {
        loader.dismiss();
        this.shops = res;
        this.shops = this.shops.shops;
      });
  }
}

