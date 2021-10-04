import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/navbar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { FooterComponent } from './footer/footer.component';
import { CallToActionComponent } from './calltoaction/calltoaction.component';
import { JobListingsComponent } from './job-listings/job-listings.component';
import { AppRoutingModule } from './app-routing.module';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SalariesComponent } from './salaries/salaries.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { AdvancedComponent } from './searchbar/advanced/advanced.component';
import { CertSearchbarComponent } from './certifications/cert-searchbar/cert-searchbar.component';
import { ListingCardComponent } from './job-listings/listing-card/listing-card.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
