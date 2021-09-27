import { Component, OnInit } from '@angular/core';
import { Listing } from './listing-card/listing.model';
import { mock_listings } from './mock-listings';

@Component({
  selector: 'surely-job-listings',
  templateUrl: './job-listings.component.html',
  styleUrls: ['./job-listings.component.sass'],
})
export class JobListingsComponent implements OnInit {
  listings: Listing[] = [];

  ngOnInit() {}

  constructor() {
    for (var listing of mock_listings) {
      this.listings.push(new Listing(listing));
    }
  }
}
