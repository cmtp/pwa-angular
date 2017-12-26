import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { LogrosService } from "./services/logros.service";

import {MatToolbarModule, MatToolbar} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { TruncatePipe } from './pipes/truncate.pipe';
import { LogroComponent } from './logro/logro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TruncatePipe,
    LogroComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule
  ],
  providers: [
    LogrosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
