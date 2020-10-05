import {Injectable} from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({providedIn:"root"})
export class ProfileService{
    constructor(private http:HttpClient){}

    updateProfile(updatedProfile){
        return this.http.put('api/student/profileUpdate',{params:{updatedProfile}})
    }
    notification(){
        return this.http.get('api/notification')
    }

}