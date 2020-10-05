import {Injectable} from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({providedIn:"root"})
export class ACService{
    constructor(private http:HttpClient){}

    getATest(){
        return this.http.get('api/aTest')
    }
    isSolvedAtest(){  
        return this.http.get('apiScoreUpdate/aTestScore/');
    }
    getCTest(){
        return this.http.get('api/cTest');
    }

    isSolvedaTest(){
        return this.http.get('api/aTest/completedTest')
    }
    isSolvedcTest(){
        return this.http.get('api/cTest/completedTest')
    }
    
}