import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  fotos = ["https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Swain_1.jpg",
    "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kindred_3.jpg",
    "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Taric_9.jpg",
    "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_1.jpg"];
    i = 0;

  constructor() { }

  ngOnInit() {
  }

  showDivs() {
    let i = this.i
    let x = document.getElementsByClassName("slides") as HTMLCollectionOf<HTMLElement>;
    console.log('cada 3 segndos')
    x[1].style.display = 'none';
  i++
  if (i > this.fotos.length) {i = 0}
    for (let n = 0; n < this.fotos.length; n++) {
      console.log('dentro del for', n);
      x[n].style.display = "none";
    }
  x[i].style.display = "block";
  console.log('fuera del if');
}
  //   fotos[i] function(i++, 3000)
  //   (function() {     // function expression closure to contain variables
  //     var i = 0;
  //     function toggle() {
  //         el.src = pics[i];           // set the image
  //         i = (i + 1) % pics.length;  // update the counter
  //     }
  //     setInterval(toggle, 2000);
  // })();
  // }
  // setInterval() {this.slideshow(), 3000}
}
