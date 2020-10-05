import {Injectable} from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({providedIn:"root"})
export class RegisterService{
constructor(private http:HttpClient){}

    getCollege(){
        return this.http.get('http://localhost:2609/api/student')
    }

    registerStudent(register){
        return this.http.post('http://localhost:2609/api/student',register)
    }

}    