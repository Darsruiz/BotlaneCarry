import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';

// import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { MatGridList } from '@angular/material/grid-list';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  nombres = ['Kindred', 'Swain', 'Varus', 'Ziggs','Ezreal','Vayne','Ashe','Corki','Samira','Ashe','Ezreal','Vayne','Ashe','Ezreal','Vayne','Ashe'];
  skin = [1,2,3,1,2,3];
  // 'Kindred', 'Swain', 'Varus', 'Ziggs',
  constructor() { }


  skinscampeones(position) {
    return(`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.nombres[position]}_${this.skin[0]}.jpg`);
  }

  nombrecampeones(position) {
    return(`${this.nombres[position]}`);
  }
  ngOnInit(): void {}

}

// export class GridComponent implements AfterContentInit {
//   @ViewChild('grid') grid: MatGridList;

//   gridByBreakpoint = {
//     xl: 8,
//     lg: 6,
//     md: 4,
//     sm: 2,
//     xs: 1
//   }

//   constructor(private observableMedia: ObservableMedia) {}

//   ngAfterContentInit() {
//     this.observableMedia.asObservable().subscribe((change: MediaChange) => {
//       this.grid.cols = this.gridByBreakpoint[change.mqAlias];
//     });
//   }
// }
