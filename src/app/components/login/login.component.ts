import { Component, OnInit, OnDestroy } from '@angular/core';

import { AuthService } from 'src/app/auth.service';
import {Subscription} from 'rxjs'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

import {LoginService} from './login.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {
  registerForm: FormGroup;
  submitted = false;
  forgotPassword:FormGroup;
  forgot=false
  forgot_progress=false;
  forgot_input=false
  login_input=false

  show=false
  alright=false;
  forgotPasswordForm:FormGroup
  private authStatusSub:Subscription;
  text;
  constructor(public authService:AuthService,private formBuilder: FormBuilder,private _snackBar: MatSnackBar,private loginService:LoginService,private router:Router) { }
  ngOnInit(){
    if(localStorage.getItem('token')){
      this.router.navigate(['practice'])
    }
   this.authStatusSub= this.authService.getAuthStatusListner().subscribe(
     authStatus=>{
      
     }
   );

   this.registerForm = this.formBuilder.group({
         
          email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
          password: ['', [Validators.required, Validators.minLength(6)]]
      });

     this.forgotPassword=this.formBuilder.group({
       email:['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]
     })

  }
  get f() { return this.registerForm.controls; }

  get for() { return this.forgotPassword.controls; }
  ngOnDestroy(){
    this.authStatusSub.unsubscribe();
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    else{
      this.login_input=true;
      this.authService.login(this.registerForm.value.email,this.registerForm.value.password)
    }
    

}

onForgot(){
  this.forgot = true;
  
  if (this.forgotPassword.invalid){ 
      return;
  }
  else{
    this.forgot_input=true
    this.forgot_progress=true
    this.loginService.forgotPassword(this.forgotPassword.value.email).subscribe(res=>{
      this._snackBar.open('Reset your password with link sent your mail','close',{
        duration:3000
      })
      this.forgot_progress=false
      this.forgot_input=false
      this.forgotPassword.reset()
      $('#basicExampleModal').modal('hide')
      
    },(err)=>{
      console.log(err)
      this.forgot_input=false;
      this.forgot_progress=false;
      this.forgotPassword.reset()

      $('#basicExampleModal').modal('hide')
    })
  }
}
register(){
  this.router.navigate(['register'])
}
}
  

