import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentModelPage } from './student-model.page';

const routes: Routes = [
  {
    path: '',
    component: StudentModelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentModelPageRoutingModule {}
