import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, NavBarComponent, FooterComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
