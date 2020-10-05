import {Injectable} from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({providedIn:"root"})
export class ResetPasswordService{
    constructor(private http:HttpClient){}

    resetPassword(token,password){

        return this.http.put('api/student/resetpassword',{params:{token:token,password:password}})
    }

}