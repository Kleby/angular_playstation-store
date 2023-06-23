import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './card.component';

import { CardLabelComponent } from './card-label/card-label.component';
import { CardPriceComponent } from './card-price/card-price.component';

const importsComponents = [CardComponent, CardLabelComponent, CardPriceComponent]

@NgModule({
  declarations: importsComponents,
  imports: [
    CommonModule
  ],
  exports: importsComponents
})
export class CardModule { }
