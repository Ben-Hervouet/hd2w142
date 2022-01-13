import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './composants/principal/principal.component';
import { TitreComponent } from './composants/titre/titre.component';
import { ListePersonnesComponent } from './composants/liste-personnes/liste-personnes.component';
import { ListeMessagesComponent } from './composants/liste-messages/liste-messages.component';
import { NouveauMessageComponent } from './composants/nouveau-message/nouveau-message.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    TitreComponent,
    ListePersonnesComponent,
    ListeMessagesComponent,
    NouveauMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
