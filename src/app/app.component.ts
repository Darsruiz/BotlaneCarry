import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { skinsName } from '../assets/skinsName';

// Import the resized event model
import { ResizedEvent } from 'angular-resize-event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  namesForLanes = skinsName.Lanes;
  Top = skinsName.Top
  Jungle = skinsName.Jungle
  Mid = skinsName.Mid
  Adc = skinsName.Adc
  Support = skinsName.Support
  arrayFull = []
  i;
  width: number;
  height: number;
  showHide = "search"
  searchResults;
  nameTemp;
  values: string = '';
  a
  searchDisplay = false;

  constructor(private router: Router) { }

  onResized(event: ResizedEvent) {
    this.width = event.newWidth;
    this.height = event.newHeight;
  }

  navigateLanes(i) {
    this.router.navigate(['main',this.namesForLanes[i]]);
  }

  DisplaySearch() {
    this.searchDisplay? this.searchDisplay = false : this.searchDisplay = true
    this.searchDisplay? this.showHide = "close" : this.showHide = "search";
  }

  filterArrays(values) {

    // Create array with every lane
    let base = []
    this.arrayFull = base.concat(this.Top, this.Jungle, this.Mid, this.Adc, this.Support)


    // standarize values
    values = this.values
    values = values.toLowerCase()
    values = values.charAt(0).toUpperCase() + values.slice(1)

    this.searchResults = this.arrayFull.filter(word => {
      return word.includes(values || this.values)})

    this.searchResults = this.searchResults.filter(this.onlyUnique)
    return this.searchResults
  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  resultImg(array, i) {
    this.nameTemp = array[i]
    return `http://ddragon.leagueoflegends.com/cdn/11.8.1/img/champion/${array[i]}.png`
  }

  navigateToChampion(i) {
    this.router.navigate([`/champion/${this.searchResults[i]}`])
    this.DisplaySearch()

  }
  unCamelCase() {
    if (this.nameTemp === undefined) {
      return 'Loading...'
    }
    return this.nameTemp.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, "$1 $2");
  }
}
