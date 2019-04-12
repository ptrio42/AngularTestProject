import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `<a routerLink="/user-zone/features">Go to features</a>`,
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
