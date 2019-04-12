import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrencyCode } from '../enums/currency-code.enum';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Ticker } from '../models/ticker';

@Injectable({
  providedIn: 'root'
})
export class TickerService {

  constructor(private http: HttpClient) { }

  getTicker(c1: CurrencyCode, c2: CurrencyCode): Observable<Ticker> {
    return this.http.get<Ticker>(`https://bitbay.net/API/Public/${c1}${c2}/ticker.json`).pipe(
      map((ticker: Ticker) => {
        ticker.currency = c1;
        return ticker;
      })
    );
  }
}
