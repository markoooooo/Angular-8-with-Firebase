import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { SubjectModel } from '../models/subject.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  subjectChanged = new Subject<SubjectModel[]>();

  // private subjects: SubjectModel[] = [
  //   new SubjectModel(1, 'Samsung', 'Galaxy S10 Plus', 'https://images-na.ssl-images-amazon.com/images/I/61YVqHdFRxL._AC_SL1322_.jpg', 'https://www.youtube.com/watch?v=ZCfgkIyD9g0'),
  //   new SubjectModel(2, 'Apple', 'Iphone 11', 'https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-11/Black/Apple-iPhone-11-Black-frontimage.jpg', 'https://www.youtube.com/watch?v=H4p6njjPV_o'),
  //   new SubjectModel(3, 'Samsung', 'Galaxy Note 10 Plus', 'https://cdn.shopify.com/s/files/1/0808/0067/products/title_galaxy_note10_plus_liquid_crystal_aura_glow_03_1200x1200.jpg', 'https://www.youtube.com/watch?v=ZCfgkIyD9g0'),
  //   new SubjectModel(4, 'Apple', 'iPhone 11 Pro Max', 'https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-11-Pro-Max/Midnight-Green/Apple-iPhone-11-Pro-Max-Midnight-Green-frontimage.jpg', 'https://www.youtube.com/watch?v=ZCfgkIyD9g0'),
  //   new SubjectModel(5, 'OnePlus', 'OnePlus 7 Pro', 'https://images-na.ssl-images-amazon.com/images/I/51s0Mb5li8L._SL1000_.jpg', 'https://www.youtube.com/watch?v=ZCfgkIyD9g0'),
  //   new SubjectModel(6, 'Google', 'Pixel 4 XL', 'https://static.bhphoto.com/images/multiple_images/images2500x2500/1571096987_IMG_1264537.jpg', 'https://www.youtube.com/watch?v=ZCfgkIyD9g0'),
  //   new SubjectModel(7, 'Huawei', 'P30 Pro', 'https://images-na.ssl-images-amazon.com/images/I/51zDfRUUhHL._AC_SX466_.jpg', 'https://www.youtube.com/watch?v=ZCfgkIyD9g0'),
  //   new SubjectModel(8, 'Samsung', 'Galaxy S10 Lite', 'http://www.mobilnisvet.com/img/obj/mobilephones/000/000/007/369/imgbig.jpg', 'https://www.youtube.com/watch?v=ZCfgkIyD9g0'),

  // ];

   private subjects: SubjectModel[] = []

  setSubjects(subjects: SubjectModel[]) {
    this.subjects = subjects;
    this.subjectChanged.next(this.subjects.slice());
  }

  getSubjects() {
    return this.subjects.slice();
  }

  getSubject(index: number) {
    return this.subjects[index];
  }

  addSubject(subject: SubjectModel) {
    this.subjects.push(subject);
    this.subjectChanged.next(this.subjects.slice());
  }

  updateSubject(index: number, newSubject: SubjectModel) {
    this.subjects[index] = newSubject;
    this.subjectChanged.next(this.subjects.slice());
  }

  deleteSubject(index: number) {
    this.subjects.splice(index, 1);
    this.subjectChanged.next(this.subjects.slice());
  }

}