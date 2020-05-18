import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../auth/auth.service";
import {
  AlertController,
  ToastController,
  LoadingController,
} from "@ionic/angular";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  public postData = {
    username: "",
    password: "",
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {}

  form = new FormGroup({
    username: new FormControl("", [
      Validators.required,
      Validators.minLength(5),
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(5),
    ]),
  });
  async onSubmit() {
    const loading = await this.loadingCtrl.create({ message: "Logging in..." });
    await loading.present();

    this.authService.login(this.form.value).subscribe(
      async (token) => {
        localStorage.setItem("token", token);
        loading.dismiss();
        this.router.navigateByUrl("home/feed");
      },
      async () => {
        const alert = await this.alertCtrl.create({
          message: "Login failed",
          buttons: ["OK"],
        });
        await alert.present();
        loading.dismiss();
      }
    );
  }
}
