import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuMealsPage } from './menu-meals';

@NgModule({
  declarations: [
    MenuMealsPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuMealsPage),
  ],
})
export class MenuMealsPageModule {}
