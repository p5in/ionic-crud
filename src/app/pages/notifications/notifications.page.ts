import { Component } from "@angular/core";
import { SafeResourceUrl, DomSanitizer } from "@angular/platform-browser";
import { Plugins, CameraResultType, CameraSource } from "@capacitor/core";

@Component({
  selector: "app-notifications",
  templateUrl: "./notifications.page.html",
  styleUrls: ["./notifications.page.scss"],
})
export class NotificationsPage {
  photo: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  async takePicture() {
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
    });

    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(
      image && image.dataUrl
    );
  }
}
