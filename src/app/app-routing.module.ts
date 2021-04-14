import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionComponent } from './pages/champion/champion.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
    //canActivate: [AmILoggedGuard]
    //pathMatch: 'full',
  {
    path: '',
    component: MainComponent,
    pathMatch: 'full',
  },
  {
    path: 'champion',
    component: ChampionComponent
  },
  // { //si el path es cualquier cosa que no esta listado arriba ^ llevara a listado
  //   path: "**",
  //   redirectTo: "listado",
  //   pathMatch: "full"
  // }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
  ]
})
export class AppRoutingModule { }
