import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ticker } from '../models/ticker';
import { CurrencyCode } from '../enums/currency-code.enum';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss']
})
export class CurrenciesComponent implements OnInit {
  tickers: Ticker[];
  currencyCodes: typeof CurrencyCode;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((data: {tickers: Ticker[]}) => {
      this.tickers = data.tickers;
    });
    this.currencyCodes = CurrencyCode;
  }

}
