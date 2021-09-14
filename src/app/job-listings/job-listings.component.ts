import { Component } from '@angular/core';

@Component({
  selector: 'surely-job-listings',
  templateUrl: './job-listings.component.html',
  styleUrls: ['./job-listings.component.sass'],
})
export class JobListingsComponent {
  messages: number = 3;
  notifications: number = 5;
  email: string = 'indeed@example.org';
}
