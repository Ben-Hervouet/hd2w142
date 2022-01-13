export class Personne {
  private _nom: string;
  private prenom: string;

  constructor(nom: string, prenom: string) {
    this._nom = nom;
    this.prenom = prenom;
  }

  get nom(): string {
    return this._nom;
  }
}
