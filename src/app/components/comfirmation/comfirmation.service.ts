import {Injectable} from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({providedIn:"root"})
export class Confirmation{
    constructor(private http:HttpClient){}

    verify(token){
        
         this.http.put('api/student/confirmation',{token:token}).subscribe(res=>{
             console.log(res);
         });err=>{
             console.log(err);
         }
         }
}