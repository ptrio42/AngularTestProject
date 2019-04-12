import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { CurrenciesComponent } from './currencies/currencies.component';
import { AppGuard } from '../guards/app.guard';
import { CurrencyPairResolverService } from './resolvers/currency-pair-resolver.service';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'features'
    },
    {
        path: 'features',
        component: FeaturesComponent,
        canActivate: [AppGuard]
    },
    {
        path: 'currencies',
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
