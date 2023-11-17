import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlideshowBannerAccueilComponent } from './slideshow-banner-accueil/slideshow-banner-accueil.component';
import { NavbarGlobalComponent } from './navbar-global/navbar-global.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideshowBannerAccueilComponent,
    NavbarGlobalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
