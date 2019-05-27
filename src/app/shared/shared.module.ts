import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  exports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AngularFontAwesomeModule,
  ],
})
export class SharedModule { }
