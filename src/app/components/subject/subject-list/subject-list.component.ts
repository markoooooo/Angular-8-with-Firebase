import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SubjectModel } from 'src/app/models/subject.model';
import { SubjectService } from 'src/app/services/posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit, OnDestroy {
  searchText = '';
  subscription: Subscription;
  subjects: SubjectModel[];

  constructor(private subjectService: SubjectService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.subscription =  this.subjectService.subjectChanged
      .subscribe(
        (sub: SubjectModel[]) => {
          this.subjects = sub;
        }
      );
    this.subjects = this.subjectService.getSubjects();
  }

  onNewSubject() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
