import { Component, OnInit} from '@angular/core';
import { skinsName } from '../../../assets/skinsName';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
// Import the resized event model
import { ResizedEvent } from 'angular-resize-event';
import { SharedFunctionsService } from '../../services/shared-functions.service';

// import {
//   trigger,
//   state,
//   style,
//   animate,
//   transition,
//   // ...
//   } from '@angular/animations';
@Component({
  selector: 'app-champion',
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.scss']
  // animations: [
  //   animation triggers go here
  // ]
})

export class ChampionComponent implements OnInit {

  nombres = skinsName.names
  skin = skinsName.skin
  champion;
  i;
  datos = ['placeholder','placeholder','placeholder',
  'placeholder','placeholder','placeholder','placeholder','placeholder'];
  tipsAlly = ['placeholder','placeholder','placeholder'];
  tipsEnemy = ['placeholder','placeholder','placeholder'];
  section = 1;

  width: number;
  height: number;

  condition = true;

  arrayN = []

  constructor(private util:SharedFunctionsService, private router: Router, private http: HttpClient) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
    // setInterval(()=>{
    //   // this.isOpen = !this.isOpen
    //   this.onResized(event)
    //   }, 1000)
   }


  async ngOnInit() {
    this.champion = this.router.url.split('/')[2];
    // console.log((this.champion));

    const url = `https://ddragon.leagueoflegends.com/cdn/11.10.1/data/en_US/champion/${this.champion}.json`
    const promise = await this.http.get(url).toPromise()

    this.metodoCogerNums(this.champion, promise)
    // const arrayN = []
    // promise.data.this.champion.skins.forEach(element => {
    //   arrayN.push[element.num];
    // });

    // console.log(arrayN);

    this.http.get(url).subscribe((res)=>{
      const deconstruct1  = Object.values(res);
      const deconstruct2 = Object.values(deconstruct1[3]);
      const deconstruct3 = Object.values(deconstruct2[0]);
      const deconstructSkins = Object.values(deconstruct3[5])

      // console.log(deconstruct3[14])
      // console.log(.data.Aatrox.skins[0].num)
      this.datos = deconstruct3;
      this.tipsAlly = deconstruct3[8];
      this.tipsEnemy = deconstruct3[9];
      //console.log('tipsally', this.tipsAlly);
      //console.log('tipsenemy', this.tipsEnemy);

      // this.datosSkills = deconstruct3[14];
      });
  }


  metodoCogerNums(champion: string, promise): number[]{

    // deconstructions of promise
    let deconstruct3 = []
    let deconstruct1  = Object.values(promise);
    let deconstruct2 = Object.values(deconstruct1[3]);
    deconstruct3 = Object.values(deconstruct2[0]);
    console.log(deconstruct3[5])
    // deconstructions of promise


    this.arrayN = [...this.arrayN]
    deconstruct3[5].forEach(Object => {

    this.arrayN.push(Object.num);
    });
    console.log(this.arrayN);
    return this.arrayN

    }

  condicion() {
    if (this.height > 500 ) {return true}
    else {return false}
  }
  obtainDatos(x) {
    return this.datos[x].charAt(0).toUpperCase() + this.datos[x].slice(1)
  }

  show(number: number) {
    this.section = number;
  }


  imagenPrincipal (champion: string) {
    return this.util.imagenPrincipal(champion)
  }

  imagenPequena (champion: string) {
    return `https://ddragon.leagueoflegends.com/cdn/11.10.1/img/champion/${champion}.png`
  }

  skins(champion: string, i: number) {
    return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_${i}.jpg`
  }

  unCamelCase(champion) {
    return this.util.unCamelCase(champion)
  }

  onResized(event: ResizedEvent) {
    this.width = event.newWidth;
    this.height = event.newHeight;
    //console.log(this.width, 'el otro');
    //console.log(this.height,'este');
  }
}
function i(i: any) {
  throw new Error('Function not implemented.');
}
