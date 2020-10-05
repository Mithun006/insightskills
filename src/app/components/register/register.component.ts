import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './register.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { flatMap } from 'lodash';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  
  registerForm: FormGroup;
  submitted = false;
  collegeName;
  register_input=false

  constructor(private formBuilder: FormBuilder,private registerService:RegisterService,private _snackBar: MatSnackBar) { }


  ngOnInit() {

    this.registerService.getCollege().subscribe(res=>{
      this.collegeName=res;
      

    })

      this.registerForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
          tel:['',[Validators.required,Validators.minLength(10),Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          passwordConfirmation:['',[Validators.required, Validators.minLength(6)]],
          clg:['',Validators.required],
          degree:['',Validators.required],
          branch:['',Validators.required],
          batch:['',Validators.required]
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
      
      else if(this.registerForm.value.password!==this.registerForm.value.passwordConfirmation){
        this._snackBar.open('Password does not match','close',{
          duration:3000
        })
        return

      }
      else{
        this.register_input=true
        const register={
          firstName:this.registerForm.value.firstName,
          lastName:this.registerForm.value.lastName,
          email:this.registerForm.value.email,
          contact:this.registerForm.value.tel,
          password:this.registerForm.value.password,
          collegeId:this.registerForm.value.clg,
          degree:this.registerForm.value.degree,
          department:this.registerForm.value.branch,
          graduatingYear:this.registerForm.value.batch
        }
       
   
         this.registerService.registerStudent(register).subscribe((res)=>{
           this._snackBar.open('Please check your email and confirm your mail id', 'close', {
             duration: 3000,
           });
           this.register_input=false;
           this.registerForm.reset();
   
   
         },err=>{
           this.register_input=false;
           this.registerForm.reset()
         })
      }
  }



}
