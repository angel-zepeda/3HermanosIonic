import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';
import Swal from 'sweetalert2';

@IonicPage()
@Component({
  selector: 'page-aspects',
  templateUrl: 'aspects.html',
})

export class AspectsPage {
  public aspects: any;
  public areaImg: string;
  public valProd = {
    pares: '',
    vendedores: ''
  }

  public valTiendaProd = {
    pares: '',
    mt2: ''
  }

  constructor(
    public navCtrl: NavController,
    private view: ViewController) {
    this.aspects = JSON.parse(localStorage.getItem('as'));
    this.areaImg = localStorage.getItem('areaImg');
  }

  openModal(name) {
    Swal.fire({ imageUrl: '' + name })
  }

  enviar() {
    this.validateForm(this.aspects);
  }

  validateForm(aspects) {
    let count = 0;
    var report;
    if (aspects.name == 'Ventas') {
      for (let a of aspects.aspects) {
        if (a.score === '') {
          a.score = "10";
        }
      }
      this.aspects = JSON.stringify(this.aspects);
      report = JSON.parse(localStorage.getItem('report'));
      report.areas.push(JSON.parse(this.aspects));
      localStorage.setItem('report', JSON.stringify(report));
      Swal.fire({
        html: '<h1 style="color:white; font-size:4.55rem;">Exito!' +
          '</h1>' +
          '<h2 style="color: white">El reporte se ha llenado correctamente. </h2>',
        type: 'success',
        background: 'rgba(0,0,0,0.7)',
        backdrop: `url('https://image.freepik.com/free-photo/leather-shoes-wooden-background_1203-7617.jpg')`
      });
      console.log(JSON.parse(this.aspects));
      this.view.dismiss();
    } else {
      for (let a of aspects.aspects) {
        if (a.score === '') {
          count++;
        }
      }
      if (count > 0) {
        Swal.fire({
          html: '<h1 style="color:white; font-size:5rem;">Oops!' +
            '</h1>' +
            '<h2 style="color: white"> Faltan aspectos por evaluar. </h2>',
          type: 'error',
          background: 'rgba(0,0,0,0.7)',
          backdrop: `url('https://image.freepik.com/free-photo/leather-shoes-wooden-background_1203-7617.jpg')`
        });
      } else {
        if (this.aspects.name == 'Bodega') {
          this.aspects = JSON.stringify(this.aspects);
          report = JSON.parse(localStorage.getItem('report'));
          report.areas.push(JSON.parse(this.aspects));
          localStorage.setItem('report', JSON.stringify(report));
          Swal.fire({
            html: '<h1 style="color:white; font-size:4.55rem;">Exito!' +
              '</h1>' +
              '<h2 style="color: white">El reporte se ha llenado correctamente. </h2>',
            type: 'success',
            background: 'rgba(0,0,0,0.7)',
            backdrop: `url('https://image.freepik.com/free-photo/leather-shoes-wooden-background_1203-7617.jpg')`
          });
          this.view.dismiss();
          this.navCtrl.push('FirmaFotoPage');
        } else {
          this.aspects = JSON.stringify(this.aspects);
          report = JSON.parse(localStorage.getItem('report'));
          report.areas.push(JSON.parse(this.aspects));
          localStorage.setItem('report', JSON.stringify(report));
          Swal.fire({
            html: '<h1 style="color:white; font-size:4.5rem;">Exito!' +
              '</h1>' +
              '<h2 style="color: white">El reporte se ha llenado correctamente. </h2>',
            type: 'success',
            background: 'rgba(0,0,0,0.7)',
            backdrop: `url('https://image.freepik.com/free-photo/leather-shoes-wooden-background_1203-7617.jpg')`
          });
          this.view.dismiss();
          console.log(JSON.parse(this.aspects));
        }
      }
    }
  }

  active(emojiId, name) {
    var emoji = document.getElementById(emojiId);

    if (emoji.id.includes('two')) {
      var emoji2 = document.getElementById('four' + name);
      var emoji3 = document.getElementById('six' + name);
      var emoji4 = document.getElementById('eigth' + name);
      var emoji5 = document.getElementById('ten' + name);
      emoji.style.background = "url('../../assets/imgs/11.png')";
      emoji2.style.background = "url('../../assets/imgs/2.png')";
      emoji3.style.background = "url('../../assets/imgs/4.png')";
      emoji4.style.background = "url('../../assets/imgs/5.png')";
      emoji5.style.background = "url('../../assets/imgs/6.png')";

    }
    if (emoji.id.includes('four')) {
      var emoji2 = document.getElementById('two' + name);
      var emoji3 = document.getElementById('six' + name);
      var emoji4 = document.getElementById('eigth' + name);
      var emoji5 = document.getElementById('ten' + name);
      emoji.style.background = "url('../../assets/imgs/22.png')";
      emoji2.style.background = "url('../../assets/imgs/1.png')";
      emoji3.style.background = "url('../../assets/imgs/4.png')";
      emoji4.style.background = "url('../../assets/imgs/5.png')";
      emoji5.style.background = "url('../../assets/imgs/6.png')";

    }
    if (emoji.id.includes('six')) {
      var emoji2 = document.getElementById('two' + name);
      var emoji3 = document.getElementById('four' + name);
      var emoji4 = document.getElementById('eigth' + name);
      var emoji5 = document.getElementById('ten' + name);
      emoji.style.background = "url('../../assets/imgs/33.png')";
      emoji2.style.background = "url('../../assets/imgs/1.png')";
      emoji3.style.background = "url('../../assets/imgs/2.png')";
      emoji4.style.background = "url('../../assets/imgs/5.png')";
      emoji5.style.background = "url('../../assets/imgs/6.png')";

    }
    if (emoji.id.includes('eigth')) {
      var emoji2 = document.getElementById('two' + name);
      var emoji3 = document.getElementById('four' + name);
      var emoji4 = document.getElementById('six' + name);
      var emoji5 = document.getElementById('ten' + name);
      emoji.style.background = "url('../../assets/imgs/44.png')";
      emoji2.style.background = "url('../../assets/imgs/1.png')";
      emoji3.style.background = "url('../../assets/imgs/2.png')";
      emoji4.style.background = "url('../../assets/imgs/4.png')";
      emoji5.style.background = "url('../../assets/imgs/6.png')";

    }
    if (emoji.id.includes('ten')) {
      var emoji2 = document.getElementById('two' + name);
      var emoji3 = document.getElementById('four' + name);
      var emoji4 = document.getElementById('six' + name);
      var emoji5 = document.getElementById('eigth' + name);
      emoji.style.background = "url('../../assets/imgs/55.png')";
      emoji2.style.background = "url('../../assets/imgs/1.png')";
      emoji3.style.background = "url('../../assets/imgs/2.png')";
      emoji4.style.background = "url('../../assets/imgs/4.png')";
      emoji5.style.background = "url('../../assets/imgs/5.png')";

    }

    // if (emoji.id.includes('happy')) {
    //   var emoji2 = document.getElementById('mad' + name);
    //   var emoji3 = document.getElementById('angry' + name);
    //   emoji2.style.background = "url('../../assets/imgs/3.png')";
    //   emoji3.style.background = "url('../../assets/imgs/1.png')";
    //   emoji.style.background = "url('../../assets/imgs/55.png')";
    //   emoji.style.backgroundSize = "cover";
    //   emoji2.style.backgroundSize = "cover";
    //   emoji3.style.backgroundSize = "cover";
    // }
    // if (emoji.id.includes('mad')) {
    //   var emoji2 = document.getElementById('happy' + name);
    //   var emoji3 = document.getElementById('angry' + name);
    //   emoji2.style.background = "url('../../assets/imgs/6.png')";
    //   emoji3.style.background = "url('../../assets/imgs/1.png')";
    //   emoji.style.background = "url('../../assets/imgs/22.png')";
    //   emoji.style.backgroundSize = "cover";
    //   emoji2.style.backgroundSize = "cover";
    //   emoji3.style.backgroundSize = "cover";
    // }
    // if (emoji.id.includes('angry')) {
    //   var emoji2 = document.getElementById('mad' + name);
    //   var emoji3 = document.getElementById('happy' + name);
    //   emoji2.style.background = "url('../../assets/imgs/3.png')";
    //   emoji3.style.background = "url('../../assets/imgs/6.png')";
    //   emoji.style.background = "url('../../assets/imgs/11.png')";
    //   emoji.style.backgroundSize = "cover";
    //   emoji2.style.backgroundSize = "cover";
    //   emoji3.style.backgroundSize = "cover";
    // }
  }

  calProdV() {
    let resHtml = document.getElementById('resProd');
    let dias = 7;
    let pares = parseInt(this.valProd.pares);
    let vendedores = parseInt(this.valProd.vendedores);
    let res = 0;
    res = pares / dias / vendedores;
    resHtml.innerHTML = "Resultado: " + Math.floor(res);
  }

  calProdTienda() {
    let resHtml = document.getElementById('resProdTienda');
    let dias = 7;
    let pares = parseInt(this.valTiendaProd.pares);
    let mt2 = parseInt(this.valTiendaProd.mt2);
    let res = 0;
    res = pares / dias / mt2;
    resHtml.innerHTML = "Resultado: " + res.toFixed(2);
  }
}

