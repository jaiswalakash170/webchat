import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxSpinnerModule } from "ngx-spinner";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreloaderComponent } from './preloader/preloader.component';
import { FrameComponent } from './frame/frame.component';
import { SidepanelComponent } from './frame/sidepanel/sidepanel.component';

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    FrameComponent,
    SidepanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
