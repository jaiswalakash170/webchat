import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxSpinnerModule } from "ngx-spinner";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreloaderComponent } from './preloader/preloader.component';
import { FrameComponent } from './frame/frame.component';
import { SidepanelComponent } from './frame/sidepanel/sidepanel.component';
import { ContentComponent } from './frame/content/content.component';
import { ProfileComponent } from './frame/sidepanel/profile/profile.component';
import { SearchComponent } from './frame/sidepanel/search/search.component';
import { ContactsComponent } from './frame/sidepanel/contacts/contacts.component';
import { BottomBarComponent } from './frame/sidepanel/bottom-bar/bottom-bar.component';
import { ContactProfileComponent } from './frame/content/contact-profile/contact-profile.component';
import { MessagesComponent } from './frame/content/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    FrameComponent,
    SidepanelComponent,
    ContentComponent,
    ProfileComponent,
    SearchComponent,
    ContactsComponent,
    BottomBarComponent,
    ContactProfileComponent,
    MessagesComponent
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
