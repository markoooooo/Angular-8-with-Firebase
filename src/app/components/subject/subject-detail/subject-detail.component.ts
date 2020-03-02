import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { SubjectService } from 'src/app/services/posts.service';
import { SubjectModel } from 'src/app/models/subject.model';

@Component({
  selector: 'app-subject-detail',
  templateUrl: './subject-detail.component.html',
  styleUrls: ['./subject-detail.component.css']
})
export class SubjectDetailComponent implements OnInit {
  subject: SubjectModel;
  id: number;

  constructor(private subjectService: SubjectService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.subject = this.subjectService.getSubject(this.id);
        }
      );
  }

  onEditSubject() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteSubject() {
    this.subjectService.deleteSubject(this.id);
    this.router.navigate(['/smartphones']);
  }

}
