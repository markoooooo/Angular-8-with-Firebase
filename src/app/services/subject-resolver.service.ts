import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { SubjectModel } from '../models/subject.model';
import { DataStorageService } from './data-storage.service';
import { SubjectService } from './posts.service';

@Injectable({
  providedIn: 'root'
})
export class SubjectResolverService implements Resolve<SubjectModel[]>{
  constructor(private dataStorage: DataStorageService,
              private subjectService: SubjectService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const subjects = this.subjectService.getSubjects();

    if (subjects.length === 0) {
      return this.dataStorage.fetchSubjects();
    } else {
      return subjects;
    }
  }
}