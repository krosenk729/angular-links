import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Site } from './Site';
import { SITES } from './mock-sites';

@Injectable()
export class SiteService {
	getSites(): Observable<Site[]> {
		return of( SITES );
	}
  	constructor() { }

}
