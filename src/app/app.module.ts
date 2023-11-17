import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlideshowBannerAccueilComponent } from './slideshow-banner-accueil/slideshow-banner-accueil.component';
import { NavbarGlobalComponent } from './navbar-global/navbar-global.component';
import { FooterGlobalComponent } from './footer-global/footer-global.component';
import { PartnesGlobalComponent } from './partnes-global/partnes-global.component';
import { ContactBannerGlobalComponent } from './contact-banner-global/contact-banner-global.component';
import { AccueilPageComponent } from './accueil-page/accueil-page.component';
import { MissionsPageComponent } from './missions-page/missions-page.component';
import { MetiersPageComponent } from './metiers-page/metiers-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { StatsAccueilComponent } from './stats-accueil/stats-accueil.component';


@NgModule({
  declarations: [
    AppComponent,
    SlideshowBannerAccueilComponent,
    NavbarGlobalComponent,
    FooterGlobalComponent,
    PartnesGlobalComponent,
    ContactBannerGlobalComponent,
    AccueilPageComponent,
    MissionsPageComponent,
    MetiersPageComponent,
    ContactPageComponent,
    StatsAccueilComponent
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
