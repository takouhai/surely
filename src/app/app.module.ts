import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/navbar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { FooterComponent } from './footer/footer.component';
import { CallToActionComponent } from './calltoaction/calltoaction.component';
import { AppRoutingModule } from './app-routing.module';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SalariesComponent } from './salaries/salaries.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { AdvancedComponent } from './searchbar/advanced/advanced.component';
import { CertSearchbarComponent } from './certifications/cert-searchbar/cert-searchbar.component';
import { JobListingsComponent } from './job-listings/job-listings.component';
import { ListingCardComponent } from './job-listings/listing-card/listing-card.component';
import { ListingFormComponent } from './job-listings/listing-form/listing-form.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchbarComponent,
    JobListingsComponent,
    FooterComponent,
    CallToActionComponent,
    FrontpageComponent,
    ReviewsComponent,
    SalariesComponent,
    CertificationsComponent,
    AdvancedComponent,
    CertSearchbarComponent,
    ListingCardComponent,
    ListingFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'surely-app'),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
