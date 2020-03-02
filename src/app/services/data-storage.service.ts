import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { SubjectModel } from '../models/subject.model';
import { SubjectService } from './posts.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  url = 'https://ng-complete-101cf.firebaseio.com/subjects.json';
  // url = 'http://it255.glitch.me/smartphones';

  constructor(private http: HttpClient,
              private subjectService: SubjectService) { }

  storeSubjects() {
    const subject = this.subjectService.getSubjects();
    this.http
      .put<SubjectModel[]>(this.url, subject)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  fetchSubjects() {
    return this.http
      .get<SubjectModel[]>(this.url)
      .pipe(
        tap(subject => {
          this.subjectService.setSubjects(subject);
          console.log(subject);
        }))
  }

}