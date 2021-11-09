import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { JobListingsComponent } from './job-listings/job-listings.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SalariesComponent } from './salaries/salaries.component';
import { ListingFormComponent } from './job-listings/listing-form/listing-form.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: 'frontpage', component: FrontpageComponent },
  { path: 'listings', component: JobListingsComponent },
  { path: 'listings/new', component: ListingFormComponent },
  { path: 'certifications', component: CertificationsComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'salaries', component: SalariesComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', redirectTo: '/frontpage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
