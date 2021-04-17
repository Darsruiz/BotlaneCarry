import { Injectable } from '@angular/core';
import { nombreSkins } from '../../assets/nombreSkins';

@Injectable({
  providedIn: 'root'
})
export class FuncionesCompartidasService {

  nombres = nombreSkins.nombres
  skin = nombreSkins.skin

  constructor() { }

  skinsCampeones(i) {
    return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.nombres[i]}_${this.skin[0]}.jpg`
  }

  nombreCampeones(i) {
    return this.nombres[i]
  }

  skinCampeon(i) {
    //hacer lo mismo que return pero con el nombre estatico
    if  (true) {
      // if es una imagen = go
      return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.nombres[1]}_${this.skin[1]}.jpg`
    } // else omitir
    else {
      return false
    }
  }
}