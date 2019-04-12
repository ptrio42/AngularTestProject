import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features/features.component';
import { CurrenciesComponent } from './currencies/currencies.component';
import { UserZoneRoutingModule } from './user-zone-routing.module';
import { CurrencyPlnComponent } from './currency-pln/currency-pln.component';
import { CurrencyUsdComponent } from './currency-usd/currency-usd.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    FeaturesComponent,
    CurrenciesComponent,
    CurrencyPlnComponent,
    CurrencyUsdComponent
  ],
  imports: [
    UserZoneRoutingModule,
    CommonModule,
    // HttpClientModule
  ],
  providers: [
    
  ]
})
export class UserZoneModule { }
