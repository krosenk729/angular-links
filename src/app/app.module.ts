import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SitesComponent } from './sites/sites.component';
import { SiteDetailsComponent } from './site-details/site-details.component';
import { CategorySite } from './category-site.pipe';
import { SiteService } from './site.service';
import { TermsNCondComponent } from './terms-n-cond/terms-n-cond.component';
import { SitesWrapperComponent } from './sites-wrapper/sites-wrapper.component';

const routes: Routes = [
{ path: 'tnc', component: TermsNCondComponent},
{ path: '', component: SitesWrapperComponent},
{ path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    SitesComponent,
    SiteDetailsComponent,
    CategorySite,
    TermsNCondComponent,
    SitesWrapperComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ SiteService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
