import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { nombreSkins } from '../../assets/nombreSkins';

@Injectable({
  providedIn: 'root'
})
export class FuncionesCompartidasService {

  nombres = nombreSkins.nombres
  skin = nombreSkins.skin
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
}
