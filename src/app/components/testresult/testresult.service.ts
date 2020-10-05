import {Injectable} from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({providedIn:"root"})
export class TestResult{
    constructor(private http:HttpClient){}

    getIsAtest(){
       return this.http.get('api/aTest/completedTest')
    }
    getIsCtest(){
        return this.http.get('api/cTest/completedTest')
    }
    getCResult(){
        return this.http.get('api/student/Ctestresult')
    }
    getAResult(){
        return this.http.get('api/student/Atestresult')
    }


}