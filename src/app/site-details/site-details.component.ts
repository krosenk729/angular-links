import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Site } from '../Site';

@Component({
  selector: 'app-site-details',
  templateUrl: './site-details.component.html',
  styleUrls: ['./site-details.component.css']
})
export class SiteDetailsComponent implements OnInit {
	@Input() site: Site;
	@Output() unFeature = new EventEmitter();
	constructor() { }

	close(){
		this.site = undefined;
		this.unFeature.emit( undefined );
	}

	ngOnInit() {
	}
}
