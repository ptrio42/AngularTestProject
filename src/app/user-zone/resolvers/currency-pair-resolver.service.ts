import { Injectable } from '@angular/core';
import { Ticker } from '../models/ticker';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TickerService } from '../services/ticker.service';
import { Observable, forkJoin } from 'rxjs';
import { CurrencyCode } from '../enums/currency-code.enum';

@Injectable({
  providedIn: 'root'
})
export class CurrencyPairResolverService implements Resolve<Ticker[]> {

  constructor(private tickerService: TickerService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Ticker[]> {
    return forkJoin(
      this.tickerService.getTicker(CurrencyCode.Bitcoin, CurrencyCode.Zloty),
      this.tickerService.getTicker(CurrencyCode.Ethereum, CurrencyCode.Zloty),
      this.tickerService.getTicker(CurrencyCode.Lisk, CurrencyCode.Zloty)
    );
  }
}
