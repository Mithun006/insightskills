import {Injectable} from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({providedIn:"root"})
export class Solve{
    constructor(private http:HttpClient){}

    getPractice(){
        return this.http.get('api/practice');
    }
    
    updatePractice(practicedQuestions){
        console.log(practicedQuestions)
        return this.http.post('api/practice/practicedQuestions',{params:practicedQuestions})
    }
    getSolved(){
        return this.http.get('api/practice/practicedQuestions')
    }

}