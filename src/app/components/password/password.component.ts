import { Component, OnInit, ViewChild } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { AuthService } from 'src/app/auth.service';
import { NotifierService } from 'angular-notifier';


@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  sent=false;
  public loading = false;
  registerForm: FormGroup;
  submitted = false;
  private notifier: NotifierService;
  constructor(notifier: NotifierService,private _bottomSheetRef: MatBottomSheetRef,private formBuilder: FormBuilder,private authService:AuthService) { 
    this.notifier = notifier;
  }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
         
          email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
         
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      else{
        
        this.loading=true;
        this.authService.email(this.registerForm.value.email).subscribe((res)=>{
          if(res){
            this.loading=false;
            this.notifier.notify('default','Reset link has been sent to your registered e-mail id');
            this._bottomSheetRef.dismiss();
          }
          
        });err=>{
          console.log(err);
        }
      }

  }


}
