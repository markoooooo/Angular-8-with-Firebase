import { Component, OnInit, Input } from '@angular/core';
import { SubjectModel } from 'src/app/models/subject.model';

@Component({
  selector: 'app-subject-item',
  templateUrl: './subject-item.component.html',
  styleUrls: ['./subject-item.component.css']
})
export class SubjectItemComponent implements OnInit {
  @Input() subject: SubjectModel;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
