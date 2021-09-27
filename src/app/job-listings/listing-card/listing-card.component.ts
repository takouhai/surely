import { Component, Input } from '@angular/core';

@Component({
  selector: 'surely-listing-card',
  templateUrl: './listing-card.component.html',
  styleUrls: ['./listing-card.component.sass'],
})
export class ListingCardComponent {
  @Input()
  id!: number;
  @Input()
  title!: string;
  @Input()
  company!: string;
  @Input()
  location!: string;
  @Input()
  zipcode!: string;
  @Input()
  type!: string;
  @Input()
  requirements!: string;
  @Input()
  date!: string;
}
