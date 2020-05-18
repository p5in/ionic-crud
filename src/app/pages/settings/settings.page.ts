import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.page.html",
  styleUrls: ["./settings.page.scss"],
})
export class SettingsPage implements OnInit {
  displayUserData: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.displayUserData = localStorage.getItem("token");
  }

  logoutAction() {
    // window.localStorage.removeItem(this.displayUserData);
    // localStorage.removeItem(key);
    localStorage.clear();
    console.log("hello world");
    // this.storageService.removeStorageItem(AuthConstants.AUTH).then((res) => {
    //   this.userData$.next("");
    this.router.navigate(["login"]);
  }
}
