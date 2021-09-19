import { Component, OnInit } from '@angular/core';
import { Option } from './option';
import { OPTIONS } from './advanced-options';

@Component({
  selector: 'surely-advanced-search',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.sass'],
})
export class AdvancedComponent implements OnInit {
  options = OPTIONS;
  selectedOption?: any;

  constructor() {}

  ngOnInit() {}

  onSelect(option: any): void {
    this.selectedOption = option;
  }
}
