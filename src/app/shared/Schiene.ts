export interface Baustein {
  bildAdresse: String;
}

export class Leer implements Baustein {
  bildAdresse: '../assets/img/leer.png'
}

export enum Richtung {
  WEICHE_VON_LINKS_NACH_RECHTS_OBEN
}
