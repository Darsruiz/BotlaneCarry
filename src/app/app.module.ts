import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { FlexLayoutModule } from '@angular/flex-layout';

// Material

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';

import { MainComponent } from './pages/main/main.component';
import { ChampionComponent } from './pages/champion/champion.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

import { AngularResizedEventModule } from 'angular-resize-event';

// Icon

import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

//fixes

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedFunctionsService } from './services/shared-functions.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ChampionComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule, // Material
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,

    // Specify AngularResizedEventModule library as an import
    AngularResizedEventModule,

    // Icons
    HttpClientModule,
    AngularSvgIconModule.forRoot(),

    //fixes
    CommonModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [SharedFunctionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
