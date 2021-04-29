import { Component, OnInit} from '@angular/core';
import { nombreSkins } from '../../../assets/nombreSkins';
import { FuncionesCompartidasService } from 'src/app/services/funciones-compartidas.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
// Import the resized event model
import { ResizedEvent } from 'angular-resize-event';
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
  datos = ['placeholder','placeholder','placeholder',
  'placeholder','placeholder','placeholder','placeholder','placeholder'];

  width: number;
  height: number;

  condition = true;

  constructor(private util:FuncionesCompartidasService, private router: Router, private http: HttpClient) {
    // setInterval(()=>{
    //   // this.isOpen = !this.isOpen
    //   this.onResized(event)
    //   }, 1000)
   }


  ngOnInit(): void {
    this.campeon = this.router.url.split('/')[2];
    console.log((this.campeon));

    const url = `https://ddragon.leagueoflegends.com/cdn/11.9.1/data/en_US/champion/${this.campeon}.json`
    this.http.get(url).subscribe((res)=>{
      const deconstruct1  = Object.values(res);
      const deconstruct2 = Object.values(deconstruct1[3]);
      const deconstruct3 = Object.values(deconstruct2[0]);
      this.datos = deconstruct3;
      });
  }

  condicion() {
    if (this.height > 500 ) {return true}
    else {return false}
  }
  obtainDatos(x) {
    return this.datos[x].charAt(0).toUpperCase() + this.datos[x].slice(1)
  }

  imagenPrincipal (campeon) {
    return this.util.imagenPrincipal(campeon)
  }

  imagenPequena (campeon) {
    return `http://ddragon.leagueoflegends.com/cdn/11.9.1/img/champion/${campeon}.png`
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

  llenarHistoria(res) {
    let historia;

  }

  onResized(event: ResizedEvent) {
    this.width = event.newWidth;
    this.height = event.newHeight;
    console.log(this.width, 'el otro');
    console.log(this.height,'este');
  }
}
function i(i: any) {
  throw new Error('Function not implemented.');
}
