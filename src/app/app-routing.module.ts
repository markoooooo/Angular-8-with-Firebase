import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubjectComponent } from './components/subject/subject.component';
import { SubjectEditComponent } from './components/subject/subject-edit/subject-edit.component';
import { SubjectDetailComponent } from './components/subject/subject-detail/subject-detail.component';
import { SubjectStartComponent } from './components/subject/subject-start/subject-start.component';
import { SubjectResolverService } from 'src/app/services/subject-resolver.service'

const routes: Routes = [
  { path: '', redirectTo: '/smartphones', pathMatch: 'full' },
  { path: 'smartphones', component: SubjectComponent, children: [
    { path: '', component: SubjectStartComponent },
    { path: 'new', component: SubjectEditComponent },
    { path: ':id', component: SubjectDetailComponent, resolve: [SubjectResolverService] },
    { path: ':id/edit', component: SubjectEditComponent, resolve: [SubjectResolverService] },
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
