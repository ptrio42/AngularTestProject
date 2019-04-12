import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features/features.component';
import { CurrenciesComponent } from './currencies/currencies.component';
import { UserZoneRoutingModule } from './user-zone-routing.module';
import { CurrencyPlnComponent } from './currency-pln/currency-pln.component';
import { CurrencyUsdComponent } from './currency-usd/currency-usd.component';

@NgModule({
  declarations: [
    FeaturesComponent,
    CurrenciesComponent,
    CurrencyPlnComponent,
    CurrencyUsdComponent
  ],
  imports: [
    UserZoneRoutingModule,
    CommonModule
  ],
  providers: [
    
  ]
})
export class UserZoneModule { }
