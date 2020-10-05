import { Injectable,Injector} from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {


  constructor(private injector:Injector) { }

  intercept(req,next){
    let authService=this.injector.get(AuthService)
    console.log('hai')
    let tokenizedReq=req.clone({
      setHeaders:{
        Authorization:`Bearer ${authService.getUserToken()}` 
      }
    })
    
   return next.handle(tokenizedReq)
  }
}
