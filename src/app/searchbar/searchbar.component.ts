import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'surely-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.sass'],
})
export class SearchbarComponent {
  constructor(public _router: Router) {}
}
