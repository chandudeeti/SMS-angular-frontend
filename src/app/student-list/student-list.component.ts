import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit, AfterViewInit{

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'Actions'];
  dataSource!: MatTableDataSource<Student>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  id: number;
  students: Student[]
  constructor(private studentService:StudentService, route: ActivatedRoute){
   
  }

 

  ngAfterViewInit(): void {
    if(this.dataSource){
      console.log("ngAfterViewInit :"+this.dataSource)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log("before if"+this.dataSource.filter)
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
      console.log("After if"+this.dataSource.paginator)
    }
  }


  ngOnInit(): void {
    this.getStudents();
    
  }

   getStudents()
  {
    this.studentService.getStudentsList().subscribe( data => {
      this.students=data;
      this.dataSource=new MatTableDataSource(this.students)
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
     // this.dataSource=this.students
      console.log(data)
    })
  }

  deleteStudent(id: number)
  {
    this.studentService.deleteStudent(id).subscribe(data => {
      console.log(data)
      this.getStudents()
    })
  }

  

}
