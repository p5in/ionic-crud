import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class IndexGuard implements CanActivate {
  constructor(public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    // console.log(route);

    let authInfo = {
      authenticated: false,
    };
    let tokenValue = localStorage.getItem("token");
    if (tokenValue) {
      authInfo.authenticated = true;
    }
    if (authInfo.authenticated) {
      this.router.navigate(["home/feed"]);
      return false;
    }

    return true;
  }
}
