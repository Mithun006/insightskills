import {Injectable} from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({providedIn:"root"})
export class Interview{
    constructor(private http:HttpClient){}

    getATest(){
        return this.http.get('api/aTest')
    }
    isSolvedaTest(){
        return this.http.get('api/aTest/completedTest')
    }
}