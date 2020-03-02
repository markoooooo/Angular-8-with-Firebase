export class SubjectModel {
  public id: number;
  public proizvodjac: string;
  public model: string;
  public slika: string;
  public video: string;

  constructor(id: number, proizvodjac: string, model: string, slika: string, video: string) {
    this.id = id;
    this.proizvodjac = proizvodjac;
    this.model = model;
    this.slika = slika;
    this.video = video;
  }
}