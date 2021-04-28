import { Component, OnInit} from '@angular/core';
import { nombreSkins } from "../../../assets/nombreSkins";
import { FuncionesCompartidasService } from 'src/app/services/funciones-compartidas.service';
import { Router } from '@angular/router';

// Import the resized event model
import { ResizedEvent } from 'angular-resize-event';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  nombres = nombreSkins.nombres
  skin = nombreSkins.skin
  Top = nombreSkins.Top
  Jungle = nombreSkins.Jungle
  Mid = nombreSkins.Mid
  Adc = nombreSkins.Adc
  Support = nombreSkins.Support
  Lineas = nombreSkins.Lineas
  lineaLink: string;
  width: number;
  height: number;
  nombreEspacios: string;
  nameTemp: string;


  constructor(private util:FuncionesCompartidasService, private router: Router) { }

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
    // console.log('linealink:', this.lineaLink);
  }

  nombreCampeones(i) {
      return this.util.nombreCampeones(i);
    }

  navegar(i) {
      this.router.navigate(['champion', i])
    }

  seleccionLineas (lineaLink: string, i: number) {
    switch (lineaLink) {
      case ('Top'):
        //console.log('ha elegido el camino del top');
        this.nameTemp = this.Top[i]
        return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.Top[i]}_${this.skin[0]}.jpg`

      case ('Jungle'):
        //console.log('ha elegido el camino del jg');
        this.nameTemp = this.Jungle[i]
        return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.Jungle[i]}_${this.skin[0]}.jpg`

      case ('Mid'):
        // this.nombreCampeonLinea = this.Mid[i]
        this.nameTemp = this.Mid[i]
        return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.Mid[i]}_${this.skin[0]}.jpg`

      case ('Adc'):
        // this.nombreCampeonLinea = this.Adc[i]
        this.nameTemp = this.Adc[i]
        return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.Adc[i]}_${this.skin[0]}.jpg`

      case ('Support'):
        // this.nombreCampeonLinea = this.Support[i]
        this.nameTemp = this.Support[i]
        return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.Support[i]}_${this.skin[0]}.jpg`

      default:
        // console.log('ha elegido el camino del default', lineaLink);
        this.nameTemp = this.Mid[i]
        return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.Mid[i]}_${this.skin[0]}.jpg`
    }
  }

  miniaturas(lineaLink: string, i: number) {
    switch (lineaLink) {
      case ('Top'):
        this.nameTemp = this.Top[i]
        return `http://ddragon.leagueoflegends.com/cdn/11.8.1/img/champion/${this.Top[i]}.png`

      case ('Jungle'):
        this.nameTemp = this.Jungle[i]
        return `http://ddragon.leagueoflegends.com/cdn/11.8.1/img/champion/${this.Jungle[i]}.png`

      case ('Mid'):
        this.nameTemp = this.Mid[i]
        return `http://ddragon.leagueoflegends.com/cdn/11.8.1/img/champion/${this.Mid[i]}.png`

      case ('Adc'):
        this.nameTemp = this.Adc[i]
        return `http://ddragon.leagueoflegends.com/cdn/11.8.1/img/champion/${this.Adc[i]}.png`

      case ('Support'):
        this.nameTemp = this.Support[i]
        return `http://ddragon.leagueoflegends.com/cdn/11.8.1/img/champion/${this.Support[i]}.png`

      default:
        // console.log('ha elegido el camino del default', lineaLink);
        this.nameTemp = this.Mid[i].replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, "$1 $2");
        return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.nombres[i]}_${this.skin[0]}.jpg`
    }
  }

  unCamelCase() {
    return this.nameTemp.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, "$1 $2");
  }
  }
