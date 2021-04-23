import { Component, OnInit} from '@angular/core';
import { nombreSkins } from '../../../assets/nombreSkins';
import { FuncionesCompartidasService } from 'src/app/services/funciones-compartidas.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-champion',
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.scss']
})

export class ChampionComponent implements OnInit {

  nombres = nombreSkins.nombres
  skin = nombreSkins.skin
  campeon;
  i;


  constructor(private util:FuncionesCompartidasService, private router: Router) { }

  ngOnInit(): void {
    this.campeon = this.router.url.split('/')[2];
    console.log((this.campeon));

    document.getElementById("historia")!.style.display = "none";
    document.getElementById("skins")!.style.display = "none";
    document.getElementById("habilidades")!.style.display = "block";
  }

  imagenPrincipal (campeon) {
    return this.util.imagenPrincipal(campeon)
  }

  imagenPequena (campeon) {
    return `http://ddragon.leagueoflegends.com/cdn/11.8.1/img/champion/${campeon}.png`
  }

  skins(i, campeon) {
    return this.util.skins(i, campeon);
  }

  show(element) {
    document.getElementById('habilidades')!.style.display = "none";
    document.getElementById('historia')!.style.display = "none";
    document.getElementById('skins')!.style.display = "none";

    document.getElementById(element)!.style.display = "block";
    console.log(element);
  }
  unCamelCase(campeon) {
    return this.util.unCamelCase(campeon)
  }
}
function i(i: any) {
  throw new Error('Function not implemented.');
}

