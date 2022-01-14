import {Injectable} from '@angular/core';
import {Message} from "../modeles/Message";
import {Personne} from "../modeles/Personne";

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  public tabDeMessage: Message[];

  constructor() {
    this.tabDeMessage = [
      new Message(new Personne('Caliendo', 'Julien'), 'Salut')
    ]
  }

  public recupLeTabDeMsg(): Message[] {
    return this.tabDeMessage;
  }
}
