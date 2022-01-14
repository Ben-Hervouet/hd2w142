import {Personne} from "./Personne";

export class Message {
  private _personne: Personne;
  private _date: Date;
  private _message: string;

  constructor(personne: Personne, message: string) {
    this._personne = personne;
    this._date = new Date();
    this._message = message;
  }


  get personne(): Personne {
    return this._personne;
  }

  get date(): Date {
    return this._date;
  }


  get message(): string {
    return this._message;
  }
}
