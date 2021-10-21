import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Listing } from './listing-card/listing.model';

@Injectable({
  providedIn: 'root',
})
export class ListingsService {
  private baseUrl: string = 'https://surely-app-default-rtdb.firebaseio.com/';
  private listingEndpoint: string = 'listings.json';
  constructor(private http: HttpClient) {}

  getListings() {
    console.log('GETting: ' + this.baseUrl + this.listingEndpoint);
    let listings = this.http.get<Listing[]>(
      this.baseUrl + this.listingEndpoint
    );
    return listings;
  }
}
