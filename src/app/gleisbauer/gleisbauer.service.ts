import {Injectable} from '@angular/core';
import {Baustein, Leer} from '../shared/Schiene';

@Injectable()
export class GleisbauerService {

  private gleise: Baustein[][] = [];

  constructor() {
  }


  neu(breite: number, hoehe: number): GleisbauerService {
    for (let y = 0; y < hoehe; y++) {
      this.gleise[y] = [];
      for (let x = 0; x < breite; x++) {
        this.gleise[y][x] = new Leer()
      }
    }
    return this
  }

  end(): Baustein[][] {
    return this.gleise
  }

}
