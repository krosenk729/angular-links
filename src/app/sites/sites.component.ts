import { Component, OnInit, Input } from '@angular/core';
import { Site } from '../Site';
import { SiteService } from '../site.service';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {
  @Input() category;
	sites: Site[];
	featSite: Site;

	constructor(private siteService: SiteService) {
   }

	ngOnInit() {
    this.getSites();
  	}

    unFeature(): void{
      this.featSite = undefined;
      console.log('site unfeatured', this.featSite);
    }

  	onFeature(site: Site): void {
  		this.featSite = site;
  		console.log('site featured', site);
  	}

    getSites(): void{
      this.siteService.getSites()
      .subscribe(data => this.sites = data );
    }
}
