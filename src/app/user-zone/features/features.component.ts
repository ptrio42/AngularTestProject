import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  template: `<a routerLink="/user-zone/currencies">Go to currencies</a>`
})
export class FeaturesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
