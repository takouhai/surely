import { Component, OnInit } from '@angular/core';
import { Search } from './search';
import { SEARCHES } from './popular-searches';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.sass'],
})
export class FrontpageComponent implements OnInit {
  searches = SEARCHES;
  selectedSearch?: Search;

  constructor() {}

  ngOnInit() {}

  onSelect(search: Search): void {
    this.selectedSearch = search;
  }
}
