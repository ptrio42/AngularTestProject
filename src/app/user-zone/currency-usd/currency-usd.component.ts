import { Component, OnInit, Input } from '@angular/core';
import { CurrencyCode } from '../enums/currency-code.enum';

const USD_TO_PLN_EXCHANGE_RANGE = 3;

@Component({
  selector: 'app-currency-usd',
  templateUrl: './currency-usd.component.html',
  styleUrls: ['./currency-usd.component.scss']
})
export class CurrencyUsdComponent implements OnInit {
  @Input() currencyName: string;
  @Input() bidPLN: number;

  currencyCodes: typeof CurrencyCode;

  get bidUSD(): number {
    return this.bidPLN / USD_TO_PLN_EXCHANGE_RANGE;
  }

  constructor() { }

  ngOnInit(): void {
    this.currencyCodes = CurrencyCode;
    console.log('currencyName', this.currencyName, this.currencyCodes.Bitcoin, this.currencyName === this.currencyCodes.Bitcoin);
  }
}
