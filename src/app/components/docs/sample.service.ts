import {Injectable} from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { TopicsComponent } from '../topics/topics.component';

@Injectable({providedIn:"root"})
export class Sample{
    constructor(private http:HttpClient){}

    postSample(ques, optA, optB, optC, optD, name){
        console.log()
      const  data={
       ques:ques, image: name 
        }
      return  this.http.post('api/practice/practiceQuestions',data)

    }

}