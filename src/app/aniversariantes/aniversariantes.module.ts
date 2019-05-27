import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AniversariantesPage } from './aniversariantes.page';

const routes: Routes = [
  {
    path: '',
    component: AniversariantesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AniversariantesPage]
})
export class AniversariantesPageModule {}
