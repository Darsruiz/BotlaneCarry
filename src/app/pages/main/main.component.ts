import { Component, OnInit} from '@angular/core';
import { skinsName } from "../../../assets/skinsName";
import { Router } from '@angular/router';

// Import the resized event model
import { ResizedEvent } from 'angular-resize-event';
import { SharedFunctionsService } from '../../services/shared-functions.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  nombres = skinsName.names
  skin = skinsName.skin
  Top = skinsName.Top
  Jungle = skinsName.Jungle
  Mid = skinsName.Mid
  Adc = skinsName.Adc
  Support = skinsName.Support
  Lineas = skinsName.Lanes
  lineaLink: string;
  width: number;
  height: number;
  nameTemp: string;
  placeholderArray = [1]


  constructor(private util:SharedFunctionsService, private router: Router) { }

  ngOnInit(): void {
    this.lineaLink = 'Mid'
    this.lineaLink = this.router.url.split('/')[2];
    }

  onResized(event: ResizedEvent) {
    this.width = event.newWidth;
    this.height = event.newHeight;
  }

  resetLineaLink() {
    this.lineaLink = this.router.url.split('/')[2];
  }

  seleccionLineas (lineaLink: string, i: number) {
    switch (lineaLink) {
      case ('Top'):
        this.placeholderArray = Object.assign(this.placeholderArray, this.Top);
        this.nameTemp = this.Top[i]
        return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.Top[i]}_${this.skin[0]}.jpg`

      case ('Jungle'):
        this.nameTemp = this.Jungle[i]
        this.placeholderArray = Object.assign(this.placeholderArray, this.Jungle);
        return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.Jungle[i]}_${this.skin[0]}.jpg`

      case ('Mid'):
        // this.nombreCampeonLinea = this.Mid[i]
        this.nameTemp = this.Mid[i]
        this.placeholderArray = Object.assign(this.placeholderArray, this.Mid);
        return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.Mid[i]}_${this.skin[0]}.jpg`

      case ('Adc'):
        this.nameTemp = this.Adc[i]
        this.placeholderArray = Object.assign(this.placeholderArray, this.Adc);
        return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.Adc[i]}_${this.skin[0]}.jpg`

      case ('Support'):
        this.nameTemp = this.Support[i]
        this.placeholderArray = Object.assign(this.placeholderArray, this.Support);
        return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.Support[i]}_${this.skin[0]}.jpg`

      default:
        this.nameTemp = this.Mid[i]
        this.placeholderArray = Object.assign(this.placeholderArray, this.Mid);
        return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.Mid[i]}_${this.skin[0]}.jpg`
    }
  }

  miniaturas(lineaLink: string, i: number) {
    switch (lineaLink) {
      case ('Top'):
        this.nameTemp = this.Top[i]
        this.placeholderArray = Object.assign(this.placeholderArray, this.Top);
        return `https://ddragon.leagueoflegends.com/cdn/11.10.1/img/champion/${this.Top[i]}.png`

      case ('Jungle'):
        this.nameTemp = this.Jungle[i]
        this.placeholderArray = Object.assign(this.placeholderArray, this.Jungle);
        return `https://ddragon.leagueoflegends.com/cdn/11.10.1/img/champion/${this.Jungle[i]}.png`

      case ('Mid'):
        this.nameTemp = this.Mid[i]
        this.placeholderArray = Object.assign(this.placeholderArray, this.Mid);
        return `https://ddragon.leagueoflegends.com/cdn/11.10.1/img/champion/${this.Mid[i]}.png`

      case ('Adc'):
        this.nameTemp = this.Adc[i]
        this.placeholderArray = Object.assign(this.placeholderArray, this.Adc);
        return `https://ddragon.leagueoflegends.com/cdn/11.10.1/img/champion/${this.Adc[i]}.png`

      case ('Support'):
        this.nameTemp = this.Support[i]
        this.placeholderArray = Object.assign(this.placeholderArray, this.Support);
        return `https://ddragon.leagueoflegends.com/cdn/11.10.1/img/champion/${this.Support[i]}.png`

      default:
        this.nameTemp = this.Mid[i].replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, "$1 $2");
        return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.nombres[i]}_${this.skin[0]}.jpg`
    }
  }

  unCamelCase() {
    if (this.nameTemp === undefined) {
      return 'placeholder'
    }
    return this.nameTemp.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, "$1 $2");
  }
  }
