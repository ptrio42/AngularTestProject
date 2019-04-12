import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { CurrenciesComponent } from './currencies/currencies.component';
import { AppGuard } from '../guards/app.guard';
import { CurrencyPairResolverService } from './resolvers/currency-pair-resolver.service';
import { RouteMap } from '../route-map';

const routes: Routes = [
    {
        path: '',
        redirectTo: RouteMap.features
    },
    {
        path: RouteMap.features,
        component: FeaturesComponent,
        canActivate: [AppGuard]
    },
    {
        path: RouteMap.currencies,
        component: CurrenciesComponent,
        resolve: {
            tickers: CurrencyPairResolverService
        }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserZoneRoutingModule { }
