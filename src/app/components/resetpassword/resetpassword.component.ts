import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import {ResetPasswordService} from './resetpassword.service'
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  registerForm: FormGroup;
  submitted = true;
  token;
  disabled=false;
 constructor(private formBuilder: FormBuilder,private snackbar:MatSnackBar,private route:ActivatedRoute,private resetPassword:ResetPasswordService){}

 ngOnInit(){

this.route.params.subscribe(res=>{
  console.log(res.token)
  this.token=res.token

})
  this.registerForm = this.formBuilder.group({
         
    password: ['', [Validators.required,Validators.minLength(6)]],
    cpassword: ['', [Validators.required, Validators.minLength(6)]]
});

}

get f() { 
  return this.registerForm.controls; 
}

onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }
  else if(this.registerForm.value.password!==this.registerForm.value.cpassword){
    this.snackbar.open('Password does not match','close',{
      duration:3000
    })
  }
  else{
    this.disabled=true;

    this.resetPassword.resetPassword(this.token,this.registerForm.value.password).subscribe((res)=>{
      console.log(res)
      this.registerForm.value.password=''
      this.registerForm.value.cpassword=''

      this.snackbar.open('Password changed successfuly.','close',{
        duration:3000
      })
    });err=>{
      console.log('res',err)
      this.disabled=false
    }
  }


}

}
