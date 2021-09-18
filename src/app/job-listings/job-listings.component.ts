import { Component, OnInit } from '@angular/core';
import { Listing } from './listing';
import { LISTINGS } from './mock-listings';

@Component({
  selector: 'surely-job-listings',
  templateUrl: './job-listings.component.html',
  styleUrls: ['./job-listings.component.sass'],
})
export class JobListingsComponent implements OnInit {
  listings = LISTINGS;
  selectedListing?: Listing;

  constructor() {}

  ngOnInit() {}

  onSelect(listing: Listing): void {
    this.selectedListing = listing;
  }
}
