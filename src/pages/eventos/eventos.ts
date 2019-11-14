import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html'
})
export class EventosPage {

  url = 'http://157.230.81.230:5000/api/history/report/by-day';
  reports: any = [];
  pdfButtons;
  user = localStorage.getItem('username');
  report: any = [];
  report_color: String;
  role = localStorage.getItem('role');

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: HttpClient,
    private loadingController: LoadingController) { }

  ionViewDidLoad() {
    
    let loader = this.loadingController.create({
      content: "Cargando eventos..."
    });
    loader.present();
    this.http.get(this.url)
      .subscribe(res => {
        loader.dismiss();
        this.reports = res;
        console.log(this.reports);
      });
  }
  details(r) {
    this.report.push(r)
    localStorage.setItem('report', JSON.stringify(this.report));
    this.navCtrl.push('Historial2Page');
    this.report = [];
  }
}
