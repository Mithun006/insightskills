import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from "@angular/material/snack-bar";




@Injectable()
export class ErrorInterceptor implements HttpInterceptor{
  
constructor(public snackBar: MatSnackBar){}
    intercept(req:HttpRequest<any>,next:HttpHandler){  
        return next.handle(req).pipe(
            catchError((error:HttpErrorResponse)=>{
                let errorMessage='Check Your Internet Connection'
                if(error.error.message){
                    errorMessage=error.error.message;

                }
                
                console.log(errorMessage)
                this.handle(errorMessage);
                return throwError(error);
            })
        );
    }

handle(errorMessage){
        this.snackBar.open(errorMessage,'close', {
            duration: 3500,
         });
    }  
}