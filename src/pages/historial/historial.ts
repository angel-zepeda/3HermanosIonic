import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController,
  LoadingController,
} from "ionic-angular";
import { HttpClient } from "@angular/common/http";

@IonicPage()
@Component({
  selector: "page-historial",
  templateUrl: "historial.html",
})
export class HistorialPage {
  // url = "http://157.230.81.230:5000/api/history/report/by-shop/last";
  url = "http://157.230.81.230:5000/api/history/reports/by-shop";
  // url = 'http://localhost:5000/api/history/report/by-shop/last';
  shop_id = {
    shop_id: localStorage.getItem("shop_id"),
  };
  report: any = [];
  role: string = localStorage.getItem("role");

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: HttpClient,
    private modal: ModalController,
    public loadingController: LoadingController
  ) {}

  ionViewDidLoad() {
    // let loader = this.loadingController.create({
    //   content: "Cargando ultimo reporte ..."
    // });
    // loader.present();

    this.http.post(this.url, this.shop_id).subscribe((res) => {
      this.report = res;
      if (this.role === "tienda") {
        const filteredByTienda = this.report.report.filter(
          (report) => report.user.role === "tienda"
        );
        this.report = { report: filteredByTienda };
      }

      if (this.role === "zona" || this.role === "user") {
        const filteredByGerente = this.report.report.filter(
          (report) =>
            report.user.role !== "ROLE_USER"
        );
        this.report = { report: filteredByGerente };
      }
      
      if (this.report.message === "No hay reportes") {
        this.report = [];
      }
    });
  }

  details(report) {
    localStorage.setItem("report", JSON.stringify(report));
    const myModal = this.modal.create("Historial2Page");
    myModal.present();
  }
}
