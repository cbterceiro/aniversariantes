import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { AniversariantesPage } from './aniversariantes.page';

const routes: Routes = [
  {
    path: '',
    component: AniversariantesPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AniversariantesPage]
})
export class AniversariantesPageModule {}
