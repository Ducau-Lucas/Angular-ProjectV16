import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilPageComponent } from './accueil-page/accueil-page.component';
import { MissionsPageComponent } from './missions-page/missions-page.component';
import { MetiersPageComponent } from './metiers-page/metiers-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

const routes: Routes = [
  {
    path: "", pathMatch: "full", component: AccueilPageComponent
  },
  {
    path: "missions", component: MissionsPageComponent
  },
  {
    path: "metiers", component: MetiersPageComponent
  },
  {
    path: "contact", component: ContactPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
