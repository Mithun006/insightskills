import {Injectable} from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({providedIn:"root"})

export class ACSolve{
    testname;
    constructor(private http:HttpClient){}


    getCTest(){
        return this.http.get('api/aTest');
    }


  submitTest(testId,data){
      return this.http.post(`api/aTest/submit/${testId}`,data)
  }

  submitcTest(testId,data){
    return this.http.post(`api/cTest/submit/${testId}`,data)


  }

}