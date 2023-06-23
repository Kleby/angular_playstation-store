import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components/components.module'; 
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offers/offers.component';

const importsPagesComponents = [ HomeComponent, OffersComponent]

@NgModule({
  declarations: importsPagesComponents,
  imports: [
    CommonModule, ComponentsModule
  ],
  exports: importsPagesComponents
})
export class PagesModule { }
