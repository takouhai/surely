import { Component, OnInit } from '@angular/core';
import { Listing } from './listing-card/listing.model';
import { ListingsService } from './listings.service';

@Component({
  selector: 'surely-job-listings',
  templateUrl: './job-listings.component.html',
  styleUrls: ['./job-listings.component.sass'],
})
export class JobListingsComponent implements OnInit {
  myListings: Listing[] | undefined;

  constructor(private listingsService:ListingsService) {
  }

  ngOnInit(): void {
    console.log("Registering showListings as a subscriber.");
    this.showListings();
  }
  showListings() {
    this.listingsService.getListings().subscribe((data: Listing[]) => {
      console.log(data);
      this.myListings = data;
    });;
  }
}
