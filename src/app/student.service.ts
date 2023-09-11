import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Student } from './student';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  getStudentsList(): Observable<Student[]>{
    const url = "http://localhost:8080/students/allStudents";
    return this.httpClient.get<Student[]>(url);
  }

  createStudent(body: Student): Observable<Student>{
    const url = "http://localhost:8080/students/createStudent";
    return this.httpClient.post<Student>(url, body);
  }

  viewStudent(id: number): Observable<Student>{
    const url = "http://localhost:8080/students/"+id;
    return this.httpClient.get<Student>(url);
  }

  deleteStudent(id: number): Observable<Student>{
    const url = "http://localhost:8080/students/"+id;
    return this.httpClient.delete<Student>(url);
  }

  

}
