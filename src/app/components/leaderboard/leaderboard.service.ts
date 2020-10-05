import {Injectable} from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({providedIn:"root"})
export class lservice{
    constructor(private http:HttpClient){}

    getLeaderboard(){
        return this.http.get('api/apiLeaderBoard')

        
    }



}