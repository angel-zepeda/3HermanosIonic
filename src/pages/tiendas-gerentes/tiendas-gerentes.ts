import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HttpClient } from "@angular/common/http";

@IonicPage()
@Component({
  selector: "page-tiendas-gerentes",
  templateUrl: "tiendas-gerentes.html",
})
export class TiendasGerentesPage {
  user = localStorage.getItem("user_shops");
  page = localStorage.getItem("page");
  shops: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient
  ) {}

  ionViewDidLoad() {
    console.log(this.user)
    
    this.http
      .post("http://157.230.81.230:5000/api/shops/gerente", {
        shops: JSON.parse(this.user),
      })
      .subscribe((res) => {
        console.log(res);
        this.shops = res;
        this.shops = this.shops.shops;
      });
  }

  inicio(shop_id, name, shop_number) {
    localStorage.setItem("name", name);
    localStorage.setItem("shop_id", shop_id);
    localStorage.setItem("shop_number", shop_number);

    return this.navCtrl.push(this.page);
  }
}
