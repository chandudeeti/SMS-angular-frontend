import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit{

  id:number;
  student: Student;

  constructor(private studentService: StudentService,
     private route: ActivatedRoute, private router:Router){}

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id']

    this.studentService.viewStudent(this.id).subscribe( data => {
      this.student=data;
      console.log("Retrived Data"+data);
    })
 
  }

  goBack()
  {
    this.router.navigate(['/students'])
  }

}
