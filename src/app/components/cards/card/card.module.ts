import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './card.component';

import { CardLabelComponent } from './card-label/card-label.component';
import { CardPricingComponent } from './card-pricing/card-pricing.component';

const importsComponents = [CardComponent, CardLabelComponent, CardPricingComponent]

@NgModule({
  declarations: importsComponents,
  imports: [
    CommonModule
  ],
  exports: importsComponents
})
export class CardModule { }
