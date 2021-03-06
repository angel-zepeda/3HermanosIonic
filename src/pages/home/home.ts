import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { HttpClient } from "@angular/common/http";
import { LoadingController } from "ionic-angular";
import Swal from "sweetalert2";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
})
export class HomePage {
  myPhoto: any;
  user_data: any;
  url = "http://157.230.81.230:5000/api/user/login";
  // url = 'http://localhost:5000/api/user/login';

  user_sign_in = {
    email: "",
    password: "",
    getToken: true,
  };
  supervisores = [
    "raulpcampos@yahoo.com.mx",
    "josemanuelre@cydecsa.com.mx",
    "riverdet@yahoo.com.mx",
    "moradelatorre@gmail.com",
    "org3_fgz@yahoo.com.mx",
    "luishp1@gmail.com",
    "aguilar285@hotmail.com",
    "olijeso@yahoo.com.mx",
    "ochoabayonalg@yahoo.com.mx",
  ];
  constructor(
    public navCtrl: NavController,
    private http: HttpClient,
    public loadingController: LoadingController
  ) {}

  login() {
    let loader = this.loadingController.create({
      content: "Iniciando sesión ...",
    });

    loader.present();
    this.http.post(this.url, this.user_sign_in).subscribe((res) => {
      loader.dismiss();
      this.user_data = res;
      console.log(this.user_data);
      if (this.user_data.message) {
        // Swal.fire("Oops", "" + this.user_data.message, "error");
        Swal.fire({
          icon: "error",
          title: "Oops",
          text: `${this.user_data.message}`,
        });
      } else {
        localStorage.setItem(
          "user_shops",
          JSON.stringify(this.user_data.user.shops)
        );
        localStorage.setItem("user_id", this.user_data.user._id);
        localStorage.setItem("username", this.user_data.user.nick);
        localStorage.setItem("role", this.user_data.user.role);
        if (this.user_data.user.role === "ROLE_USER") {
          Swal.fire({
            icon: "success",
            title: "Bienvenido",
            text: `${this.user_data.user.nick}`,
          });

          if (this.user_data.user.shops.length > 0) {
            return this.navCtrl.push("GerentePage");
          }
          this.navCtrl.push("InicioPage");
        } else {
          Swal.fire({
            icon: "success",
            title: "Bienvenido",
            text: `${this.user_data.user.nick}`,
          });
          this.navCtrl.push("GerentePage");
        }
      }
    });
  }
}
