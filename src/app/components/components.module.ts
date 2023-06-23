import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { CardsModule } from './cards/cards.module';


@NgModule({
  declarations: [MenuBarComponent],
  imports: [
    CommonModule, CardsModule, AppRoutingModule
  ],
  exports: [MenuBarComponent, CardsModule]
})
export class ComponentsModule { }
