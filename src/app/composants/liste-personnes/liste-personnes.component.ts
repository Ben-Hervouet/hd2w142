import {Component, OnInit} from '@angular/core';
import {Personne} from "../../modeles/Personne";

@Component({
  selector: 'app-liste-personnes',
  templateUrl: './liste-personnes.component.html',
  styleUrls: ['./liste-personnes.component.css']
})
export class ListePersonnesComponent implements OnInit {

  public tabDePersonne: Personne[];

  constructor() {
    this.tabDePersonne = [
      new Personne('Caliendo', 'Julien'),
      new Personne('Al\'Thor', 'Rand')
    ];
  }

  ngOnInit(): void {
  }

}
