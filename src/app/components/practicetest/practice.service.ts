import {Injectable} from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({providedIn:"root"})
export class PacticeService{
    constructor(private http:HttpClient){}

    getPractice(){
        return this.http.get('api/practice')
    }
    getSolved(){
        return this.http.get('api/practice/practicedQuestions')
    }

}