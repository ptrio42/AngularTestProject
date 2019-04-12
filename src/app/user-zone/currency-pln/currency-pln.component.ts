import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-currency-pln',
  templateUrl: './currency-pln.component.html',
  styleUrls: ['./currency-pln.component.scss']
})
export class CurrencyPlnComponent implements OnInit {
  @Input() currencyName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
