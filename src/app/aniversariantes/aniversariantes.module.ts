import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { AniversariantesPage } from './aniversariantes.page';
import { AbaAniversariosComponent } from './aba-aniversarios/aba-aniversarios.component';
import { AbaUnimedComponent } from './aba-unimed/aba-unimed.component';

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
  declarations: [
    AniversariantesPage,
    AbaAniversariosComponent,
    AbaUnimedComponent,
  ],
})
export class AniversariantesPageModule {}
