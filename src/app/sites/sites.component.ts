import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Site } from '../Site';
import { SiteService } from '../site.service';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
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
