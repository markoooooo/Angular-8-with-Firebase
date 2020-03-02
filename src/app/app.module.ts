import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SubjectEditComponent } from './components/subject/subject-edit/subject-edit.component';
import { SubjectItemComponent } from './components/subject/subject-list/subject-item/subject-item.component';
import { SubjectListComponent } from './components/subject/subject-list/subject-list.component';
import { SubjectComponent } from './components/subject/subject.component';
import { FilterPipe } from './pipe/filter.pipe';
import { SubjectDetailComponent } from './components/subject/subject-detail/subject-detail.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { SubjectStartComponent } from './components/subject/subject-start/subject-start.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectEditComponent,
    FilterPipe,
    HeaderComponent,
    SubjectListComponent,
    SubjectItemComponent,
    SubjectComponent,
    SubjectDetailComponent,
    DropdownDirective,
    SubjectStartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
