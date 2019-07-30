import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-reports-user',
  templateUrl: 'reports-user.html',
})
export class ReportsUserPage {
  reports = JSON.parse(localStorage.getItem('reportsByUser'));
  report: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  details(r) {
    this.report.push(r)
    localStorage.setItem('report', JSON.stringify(this.report));
    this.navCtrl.push('Historial2Page');
    this.report = [];
  }
}
