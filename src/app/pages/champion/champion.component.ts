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
    document.getElementById("habilidades")!.style.display = "none";
  }

  imagenPrincipal (campeon) {
    return this.util.imagenPrincipal(campeon)
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

  esconderMostrar() {
    let habilidades;
    let skins;
    let historia;
    let show;

    switch (true) {
      case (true):
              console.log('case true', habilidades, skins, historia);
              habilidades = "block";
              skins = "none";
              historia = "none";
        break;

      case (true):
              console.log('case 2', habilidades, skins, historia);
              habilidades = "none";
              skins = "block";
              historia = "none";
        break;

      default:
              console.log('default',habilidades, skins, historia);
              habilidades = "none";
              skins = "none";
              historia = "block";
        break;
    }
  }
  myFunction() {
    var escondido = document.getElementById("habilidades");
    var skins=document.getElementById('skins');
    var historia=document.getElementById('historia');

    if (escondido.style.display === "block") {
      escondido.style.display = "none";

    } else {
      escondido.style.display = "block";
      skins.style.display='none';
      historia.style.display='none';
    }
  }

  myFunction2() {
    var escondido = document.getElementById("escondido");
    var skins=document.getElementById('skins');
    var historia=document.getElementById('historia');

    if (skins.style.display === "block") {
      skins.style.display = "none";

    } else {
      skins.style.display = "block";
      escondido.style.display='none';
      historia.style.display='none';
    }
  }

  myFunction3() {
    var escondido = document.getElementById("escondido");
    var skins=document.getElementById('skins');
    var historia=document.getElementById('historia');

    if (historia.style.display === "block") {
      historia.style.display = "none";

    } else {
      historia.style.display = "block";
      escondido.style.display='none';
      skins.style.display='none';
    }
  }
}
function i(i: any) {
  throw new Error('Function not implemented.');
}

