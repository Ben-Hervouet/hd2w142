import {Component, Inject, OnInit} from '@angular/core';
import {Personne} from "../../modeles/Personne";
import {MessagesService} from "../../services/messages.service";

@Component({
  selector: 'app-liste-personnes',
  templateUrl: './liste-personnes.component.html',
  styleUrls: ['./liste-personnes.component.css']
})
export class ListePersonnesComponent implements OnInit {

  public tabDePersonne: Personne[];

  constructor(
    @Inject(MessagesService) private monService: MessagesService
  ) {
    this.tabDePersonne = this.monService.recupLeTabDePersonne();
  }

  ngOnInit(): void {
  }

}
