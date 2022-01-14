import {Component, Inject, OnInit} from '@angular/core';
import {Message} from "../../modeles/Message";
import {Personne} from "../../modeles/Personne";
import {MessagesService} from "../../services/messages.service";

@Component({
  selector: 'app-liste-messages',
  templateUrl: './liste-messages.component.html',
  styleUrls: ['./liste-messages.component.css']
})
export class ListeMessagesComponent implements OnInit {

  public tabDeMessage: Message[] = [];

  constructor(
    @Inject(MessagesService) private monService: MessagesService
  ) {
    this.tabDeMessage = this.monService.recupLeTabDeMsg();
  }

  ngOnInit(): void {
  }

}
