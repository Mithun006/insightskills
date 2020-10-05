import {Injectable} from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable({providedIn:"root"})

export class InstructionService{
    constructor(private http:HttpClient){}

    userName(){
        return this.http.get('api/student/profile')
    }

    giveAtestId(testId,id,title){
        return this.http.post<{message:string,result:any,id:string}>(`api/aTest/start/${testId}/${id}/${title}`,'hello');
    }

    giveCtestId(testId,id,title){
        return this.http.post<{message:string,result:any,id:string}>(`api/cTest/start/${testId}/${id}/${title}`,'hello')
    }

}