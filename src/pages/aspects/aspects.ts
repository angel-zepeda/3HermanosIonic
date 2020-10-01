import { Component } from "@angular/core";
import { IonicPage, NavController, ViewController } from "ionic-angular";
import Swal from "sweetalert2";

@IonicPage()
@Component({
  selector: "page-aspects",
  templateUrl: "aspects.html",
})
export class AspectsPage {
  public aspects: any;
  public areaImg: string;
  public valProd = {
    pares: "",
    vendedores: "",
  };

  public valTiendaProd = {
    pares: "",
    mt2: "",
  };

  imgUrl = "../../assets/imgs";

  constructor(public navCtrl: NavController, private view: ViewController) {
    this.aspects = JSON.parse(localStorage.getItem("as"));
    this.areaImg = localStorage.getItem("areaImg");
  }

  openModal(name) {
    Swal.fire({ imageUrl: "" + name });
  }

  enviar() {
    this.validateForm(this.aspects);
  }

  validateForm(aspects) {
    let count = 0;
    var report;
    if (aspects.name == "Ventas") {
      for (let a of aspects.aspects) {
        if (a.score === "") {
          a.score = "10";
        }
      }
      this.aspects = JSON.stringify(this.aspects);
      report = JSON.parse(localStorage.getItem("report"));
      report.areas.push(JSON.parse(this.aspects));
      localStorage.setItem("report", JSON.stringify(report));
      Swal.fire({
        html:
          '<h1 style="color:white; font-size:4.55rem;">Exito! </h1>' +
          '<h2 style="color: white">El reporte se ha llenado correctamente. </h2>',
        icon: "success",
        background: "rgba(0,0,0,0.7)",
        backdrop: `url('https://image.freepik.com/free-photo/leather-shoes-wooden-background_1203-7617.jpg')`,
      });
      console.log(JSON.parse(this.aspects));
      this.view.dismiss();
    } else {
      for (let a of aspects.aspects) {
        if (a.score === "") {
          count++;
        }
      }
      if (count > 0) {
        Swal.fire({
          html:
            '<h1 style="color:white; font-size:5rem;">Oops! </h1>' +
            '<h2 style="color: white"> Faltan aspectos por evaluar. </h2>',
          icon: "error",
          background: "rgba(0,0,0,0.7)",
          backdrop: `url('https://image.freepik.com/free-photo/leather-shoes-wooden-background_1203-7617.jpg')`,
        });
      } else {
        if (this.aspects.name == "Bodega") {
          this.aspects = JSON.stringify(this.aspects);
          report = JSON.parse(localStorage.getItem("report"));
          report.areas.push(JSON.parse(this.aspects));
          localStorage.setItem("report", JSON.stringify(report));
          Swal.fire({
            html:
              '<h1 style="color:white; font-size:4.55rem;">Exito! </h1>' +
              '<h2 style="color: white">El reporte se ha llenado correctamente. </h2>',
            icon: "success",
            background: "rgba(0,0,0,0.7)",
            backdrop: `url('https://image.freepik.com/free-photo/leather-shoes-wooden-background_1203-7617.jpg')`,
          });
          this.view.dismiss();
          this.navCtrl.push("FirmaFotoPage");
        } else {
          this.aspects = JSON.stringify(this.aspects);
          report = JSON.parse(localStorage.getItem("report"));
          report.areas.push(JSON.parse(this.aspects));
          localStorage.setItem("report", JSON.stringify(report));
          Swal.fire({
            html:
              '<h1 style="color:white; font-size:4.5rem;">Exito! </h1>' +
              '<h2 style="color: white">El reporte se ha llenado correctamente. </h2>',
            icon: "success",
            background: "rgba(0,0,0,0.7)",
            backdrop: `url('https://image.freepik.com/free-photo/leather-shoes-wooden-background_1203-7617.jpg')`,
          });
          this.view.dismiss();
          console.log(JSON.parse(this.aspects));
        }
      }
    }
  }

  active(radioId, name) {
    const currentButton = document.getElementById(radioId);
    const number = currentButton.id.split("-")[0];
    const twoButton = document.getElementById(`two-${name}`);
    const fourButton = document.getElementById(`four-${name}`);
    const sixButton = document.getElementById(`six-${name}`);
    const eightButton = document.getElementById(`eigth-${name}`);
    const tenButton = document.getElementById(`ten-${name}`);

    switch (number) {
      case "two":
        currentButton.style.backgroundImage = `url(${this.imgUrl}/11.png)`;
        fourButton.style.backgroundImage = `url(${this.imgUrl}/2.png)`;
        sixButton.style.backgroundImage = `url(${this.imgUrl}/3.png)`;
        eightButton.style.backgroundImage = `url(${this.imgUrl}/4.png)`;
        tenButton.style.backgroundImage = `url(${this.imgUrl}/5.png)`;
        break;
      case "four":
        currentButton.style.backgroundImage = `url(${this.imgUrl}/22.png)`;
        twoButton.style.backgroundImage = `url(${this.imgUrl}/1.png)`;
        sixButton.style.backgroundImage = `url(${this.imgUrl}/3.png)`;
        eightButton.style.backgroundImage = `url(${this.imgUrl}/4.png)`;
        tenButton.style.backgroundImage = `url(${this.imgUrl}/5.png)`;
        break;

      case "six":
        currentButton.style.backgroundImage = `url(${this.imgUrl}/33.png)`;
        fourButton.style.backgroundImage = `url(${this.imgUrl}/2.png)`;
        twoButton.style.backgroundImage = `url(${this.imgUrl}/1.png)`;
        eightButton.style.backgroundImage = `url(${this.imgUrl}/4.png)`;
        tenButton.style.backgroundImage = `url(${this.imgUrl}/5.png)`;
        break;

      case "eigth":
        currentButton.style.backgroundImage = `url(${this.imgUrl}/44.png)`;
        fourButton.style.backgroundImage = `url(${this.imgUrl}/2.png)`;
        sixButton.style.backgroundImage = `url(${this.imgUrl}/3.png)`;
        twoButton.style.backgroundImage = `url(${this.imgUrl}/1.png)`;
        tenButton.style.backgroundImage = `url(${this.imgUrl}/5.png)`;
        break;

      case "ten":
        currentButton.style.backgroundImage = `url(${this.imgUrl}/55.png)`;
        twoButton.style.backgroundImage = `url(${this.imgUrl}/1.png)`;
        fourButton.style.backgroundImage = `url(${this.imgUrl}/2.png)`;
        sixButton.style.backgroundImage = `url(${this.imgUrl}/3.png)`;
        eightButton.style.backgroundImage = `url(${this.imgUrl}/4.png)`;
        break;
      default:
        break;
    }
  }

  calProdV() {
    let resHtml = document.getElementById("resProd");
    let dias = 7;
    let pares = parseInt(this.valProd.pares);
    let vendedores = parseInt(this.valProd.vendedores);
    let res = 0;
    res = pares / dias / vendedores;
    resHtml.innerHTML = "Resultado: " + Math.floor(res);
  }

  calProdTienda() {
    let resHtml = document.getElementById("resProdTienda");
    let dias = 7;
    let pares = parseInt(this.valTiendaProd.pares);
    let mt2 = parseInt(this.valTiendaProd.mt2);
    let res = 0;
    res = pares / dias / mt2;
    resHtml.innerHTML = "Resultado: " + res.toFixed(2);
  }
}
