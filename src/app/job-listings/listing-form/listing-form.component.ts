import { Component, OnInit } from '@angular/core';
import { Listing } from './../listing-card/listing.model';
import { ListingsService } from './../listings.service';

@Component({
  selector: 'surely-listing-form',
  templateUrl: './listing-form.component.html',
  styleUrls: ['./listing-form.component.sass'],
})
export class ListingFormComponent implements OnInit {
  constructor(private listingsService: ListingsService) {}

  ngOnInit(): void {}

  newListing(data: Listing) {
    this.listingsService.addListing(data).subscribe((data) => {
      console.log('New information sent to backend');
    });
  }
}
