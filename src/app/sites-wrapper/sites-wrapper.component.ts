import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sites-wrapper',
  templateUrl: './sites-wrapper.component.html',
  styleUrls: ['./sites-wrapper.component.css']
})
export class SitesWrapperComponent implements OnInit {
  title = 'Subscribe Me Too';
  categories = ['Fitness', 'Life & Time', 'Computer-y Things'];
  current = 0;
  
  // limit to enum of categories? instead of string
  onSelect(dir: number): void{

  	if( this.current + dir < 0 ){
  		this.current = this.categories.length -1;

  	} else if ( this.current + dir > this.categories.length -1 ){
  		this.current = 0;

  	} else {
  		this.current += dir;
  	}
  	
  }

  constructor() { }

  ngOnInit() {
  }

}
