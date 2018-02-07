import { Pipe, PipeTransform } from '@angular/core';
import { Site } from './Site';


@Pipe({ name: 'categorySite', pure: false })
export class CategorySite implements PipeTransform {
  transform(sites: Site[], category: string) {
    return sites.filter(i => i.category === category);
  }
}