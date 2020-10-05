import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { ProfileService } from './profile.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { NotificationComponent } from '../notification/notification.component';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 
 public mail:any;
 public firstname:any;
//  public loading=false;
public lastName;
// fd;
//   image:string="assets/image/profile.jpeg";
//   // image:string="profileImages/5ecce663550abb20e8826259Design.jpg"
//   fileToUpload: File = null;
// edit=false;
// aTest;
// cTest;
updatefirstName;
updatelastName;
updateContact;
updateCourse
updateemail;
updateDegree
clgName;
mobile;
degree;
updateclg;
department;
updated=false;
notification;
// image1:string='assets/image/download.svg'

  constructor(private authService:AuthService,private updateService:ProfileService,private snackBar:MatSnackBar,private router:Router,public dialog: MatDialog) { }
  ngOnInit(): void {
    // this.loading=true;
    this.authService.getUsername().subscribe(res=>{
      console.log(res);
      

      this.mail=res['studentProfile'].mailId;
      this.firstname=res['studentProfile'].firstName;
      this.lastName=res['studentProfile'].lastName;
      this.clgName=res['collegeName'];
      this.mobile=res['studentProfile'].contact;
      this.degree=res['studentProfile'].degree;
      this.department=res['studentProfile'].department
      
      // this.aTest=res['aTest'].length;
      // this.cTest=res['cTest'].length;
      // console.log(this.aTest);
      // console.log(this.cTest);
      
      
    })
    
      this.updateService.notification().subscribe(res=>{
        console.log(res)
        this.notification=res['result'].reverse()
      })
  
    
  }

  



  onLogin(loginForm){
    this.updated=true
    console.log(loginForm.value)
   this.updateService.updateProfile(loginForm.value).subscribe(res=>{
     this.updated=false;
     $('#basicExampleModal').modal('hide');
     this.snackBar.open('Profile updated successfully','close',{
       duration:3000
     })
     this.router.navigateByUrl('/profile', { skipLocationChange: false }).then(() => {
      this.router.navigate(['profile']);
  }); 
     

     
   },err=>{
     this.updated=false;
     $('#basicExampleModal').modal('hide');
     this.router.navigateByUrl('/profile', { skipLocationChange: true }).then(() => {
      this.router.navigate(['profile']);
  }); 
     
     
   })
    
  }

  notify_function(i){
    this.dialog.open(NotificationComponent,{
      data:this.notification[i]

    })
  }

 
}
  

