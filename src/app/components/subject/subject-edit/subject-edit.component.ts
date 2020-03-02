import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { SubjectService } from 'src/app/services/posts.service';
import { SubjectModel } from 'src/app/models/subject.model';

@Component({
  selector: 'app-subject-edit',
  templateUrl: './subject-edit.component.html',
  styleUrls: ['./subject-edit.component.css']
})
export class SubjectEditComponent implements OnInit {
  id: number;
  editMode = false;
  subjectForm: FormGroup;

  constructor(private route: ActivatedRoute, 
              private subjectService: SubjectService,
              private router: Router) { }


  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    const newSubject = new SubjectModel(
      this.subjectForm.value['id'],
      this.subjectForm.value['proizvodjac'],
      this.subjectForm.value['model'],
      this.subjectForm.value['slika'],
      this.subjectForm.value['video'],
    );
    if (this.editMode) {
      this.subjectService.updateSubject(this.id, newSubject);
    } else {
      this.subjectService.addSubject(newSubject);
    }

    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let id: number;
    let sifraPredmeta = '';
    let nazivPredmeta = '';
    let opisPredmeta = '';
    let esbpBodovi: string;

    if (this.editMode) {
      const subject = this.subjectService.getSubject(this.id);
      id = subject.id;
      sifraPredmeta = subject.proizvodjac;
      nazivPredmeta = subject.model;
      opisPredmeta = subject.slika;
      esbpBodovi = subject.video;
    }

    this.subjectForm = new FormGroup({
      'id': new FormControl(id, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'proizvodjac': new FormControl(sifraPredmeta, Validators.required),
      'model': new FormControl(nazivPredmeta, Validators.required),
      'slika': new FormControl(opisPredmeta, Validators.required),
      'video': new FormControl(esbpBodovi, Validators.required)
    });
  }

}
