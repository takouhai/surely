import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { Listing } from '../job-listings/listing-card/listing.model';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  listingsRef: AngularFireList<any> | undefined;
  listings: Observable<Listing[]>;
  constructor(private db: AngularFireDatabase) {
    console.log('Setting up Firebase communication');
    this.listings = this.db.list<Listing>('listings').valueChanges();
  }

  public showData() {
    this.listings.subscribe((data: Listing[]) => {
      console.log('Data received');
      for (let item of data) {
        console.log(item);
      }
    });
  }

  public getListings() {
    this.listingsRef = this.db.list('listings');
    return this.listingsRef;
  }

  public addListing(listing: Listing) {
    this.listingsRef = this.db.list('listings');
    this.listingsRef.push(listing).catch((error) => {
      console.log('error in adding listing');
    });
  }
}
