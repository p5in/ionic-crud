import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { SlidesComponent } from "./slides/slides.component";
import { LogoComponent } from "./logo/logo.component";
import { StartComponent } from "./start/start.component";

@NgModule({
  declarations: [SlidesComponent, LogoComponent, StartComponent],
  imports: [CommonModule, FormsModule, IonicModule],
  exports: [SlidesComponent, StartComponent, LogoComponent],
})
export class ComponentsModule {}
