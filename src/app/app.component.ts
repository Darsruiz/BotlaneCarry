import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { nombreSkins } from '../assets/nombreSkins';

// Import the resized event model
import { ResizedEvent } from 'angular-resize-event';

// icon
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'BotlaneCarry';
  nombresLineas = nombreSkins.Lineas;
  Top = nombreSkins.Top
  Jungle = nombreSkins.Jungle
  Mid = nombreSkins.Mid
  Adc = nombreSkins.Adc
  Support = nombreSkins.Support
  arrayFull = []
  arrayFiltrado = ['Swain','Kindred']
  i;
  width: number;
  height: number;
  showHide = "search"
  searchResults;
  nameTemp;
  values: string = '';
  a

  constructor(private router: Router) { }

  onResized(event: ResizedEvent) {
    this.width = event.newWidth;
    this.height = event.newHeight;
  }

  seleccionarTop(i: number) {
    console.log(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.Top[i]}_0.jpg`)
    return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.Top[i]}_0.jpg`
  }

  navegarLineas(i) {
    console.log('navegar',this.nombresLineas[i]);
    this.router.navigate(['main',this.nombresLineas[i]]);
  }

  searchDisplay() {
    let search = document.getElementById('search').style.display

    if (search == "none") {
      this.showHide = "close"
      document.getElementById('search')!.style.display = "flex";
      document.getElementById('results')!.style.display = "flex";
    }
    else {
      this.showHide = "search"
      document.getElementById('search')!.style.display = "none";
      document.getElementById('results')!.style.display = "none";
    }

  }

  filtrarArrays(values) {

    // crear array con todos
    let base = []
    this.arrayFull = base.concat(this.Top, this.Jungle, this.Mid, this.Adc, this.Support)
    //console.log(arrayFull)

    // estandarizar values
    values = values.toLowerCase()
    values = values.charAt(0).toUpperCase() + values.slice(1)

    //arrayFiltrado = this.arrayFull.match()
    console.log(this.arrayFull.includes(values)? `${values} yes` : `${values} no`)
    //this.searchResults = a.match(values)
    //console.log(values)
    // this.a.filter(function(values) {
    //   if (values === this.a[0]) {
    //     console.log(values,'dentro');
    //   } else console.log('object');

    // })

    this.searchResults = this.arrayFull


    return this.searchResults
  }



  resultadoImg(i) {
    this.nameTemp = this.arrayFiltrado[i]
    return `http://ddragon.leagueoflegends.com/cdn/11.8.1/img/champion/${this.arrayFiltrado[i]}.png`
  }
  unCamelCase() {
    if (this.nameTemp === undefined) {
      return 'Loading...'
    }
    return this.nameTemp.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, "$1 $2");
  }
}
