import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {



  constructor(private authService:AuthService,private router:Router,private route:ActivatedRoute) { }
atest='Atest'
ctest='Ctest';
  ngOnInit():void {
    

  }
  amin(){
    this.authService.givedurationn(this.atest);
    this.router.navigate(['practice/portal/aportal'],{
      queryParams:{name:this.atest}
    })
  }
  cmin(){
    this.authService.givedurationn(this.ctest);
    this.router.navigate(['practice/portal/cportal'],{
      queryParams:{name:this.ctest}
    });
  }


}
