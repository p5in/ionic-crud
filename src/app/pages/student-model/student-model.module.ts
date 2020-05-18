import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentModelPageRoutingModule } from './student-model-routing.module';

import { StudentModelPage } from './student-model.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentModelPageRoutingModule
  ],
  declarations: [StudentModelPage]
})
export class StudentModelPageModule {}
