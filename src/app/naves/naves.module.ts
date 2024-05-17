import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavesCardsComponent } from './naves-cards/naves-cards.component';
import { NaveDetailComponent } from './nave-detail/nave-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavesCardsComponent, NaveDetailComponent],
  exports: [NavesCardsComponent, NaveDetailComponent]
})
export class NavesModule { }
