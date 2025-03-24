import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ImagesComponent } from './components/images/images.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IntroComponent } from './components/intro/intro.component';

import { ImagesDataService } from './services/images-data.service';

@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    CanvasComponent,
    NavbarComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ImagesDataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
