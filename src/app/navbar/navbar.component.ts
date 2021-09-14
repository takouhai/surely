import { Component } from '@angular/core';

@Component({
  selector: 'surely-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavBarComponent {
  messages: number = 3;
  notifications: number = 5;
  email: string = 'indeed@example.org';
}
