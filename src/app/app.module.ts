import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/navbar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { FooterComponent } from './footer/footer.component';
import { CallToActionComponent } from './calltoaction/calltoaction.component';
import { JobListingsComponent } from './job-listings/job-listings.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchbarComponent,
    JobListingsComponent,
    FooterComponent,
    CallToActionComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
