import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { ViewStudentComponent } from './view-student/view-student.component';

const routes: Routes = [
  {path:'students', component:StudentListComponent},
  { path: '', redirectTo:'students', pathMatch:'full'},
  { path: 'students/create-student', component:CreateStudentComponent},
  { path: 'students/students/:id', component:ViewStudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
