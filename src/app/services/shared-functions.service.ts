import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { skinsName } from '../../assets/skinsName';


@Injectable({
  providedIn: 'root'
})
export class SharedFunctionsService {

  nombres = skinsName.names
  skin = skinsName.skin
  campeon: any;
  i: Number;

  constructor() { }

  imagenPrincipal(campeon) {
    return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${campeon}_${this.skin[0]}.jpg`
  }
  skinsCampeones(campeon) {
      return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.campeon}_${this.skin[0]}.jpg`
  }

  nombreCampeones(i) {
    return this.nombres[i]
  }


  skins(campeon: string, i: number) {
    return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${i}_${campeon}.jpg`
  }

  unCamelCase(campeon) {
    campeon = campeon.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, "$1 $2");
    return campeon;
  }
}
