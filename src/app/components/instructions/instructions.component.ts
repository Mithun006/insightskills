import { Component, OnInit} from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Router, ActivatedRoute } from '@angular/router';
import { InstructionService } from './instruction.service';


@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})


export class InstructionsComponent implements OnInit{
  public loading=false;
name;
counter=0;
timeleft=10;
maxMark;
topic
counterr;
IsDisabled=true;
duration;
id;
_id;
index
noofq;
userName

  constructor(private authService:AuthService,private router:Router,private route:ActivatedRoute,private inst:InstructionService) {
  
  }


  ngOnInit(): void {
    this.inst.userName().subscribe(res=>{
      console.log(res)
      this.userName=res['studentProfile'].firstName
    })
    // this.loading=true;
    this.route.queryParams.subscribe(res=>{
      console.log(res)
      this.duration=res.duration
      this.topic=res.testName
      this.maxMark=res.maxMark
      this.id=res.id;
      this._id=res._id
      this.index=res.index;
      this.noofq=res.noofq;
      this.name=res.name
      console.log(this.noofq)
      this.loading=false
    })
    this.authService.getDashboardoff();
    // this.authService.getUsername().subscribe(res=>{
    //   console.log(res);
    //   this.name=res['studentProfile'].firstName;
    //   this.loading=false;
    // })
 
// this.authService.getDuration().subscribe(res=>{
//   this.duration=res['duration']
//   this.noofq=res['questions']
//   this.noofq=this.noofq.length;
//   this.topic=res['testName']
//   this.loading=false;
  
// })

    
    
    
   
    let intervalId = setInterval(() => {
      this.counterr = this.convertSeconds(this.timeleft - this.counter);
      this.counter++;
      if(this.counter === this.timeleft){
        clearInterval(intervalId)
        this.IsDisabled=false ;
      } 
      
  }, 1000)

    

    
  }
  convertSeconds(s){
    let min=Math.floor(s/60);
    let sec=s%60;
    return min.toLocaleString('en-us',{minimumIntegerDigits:2}) +':'+sec.toLocaleString('en-us',{minimumIntegerDigits:2});


  }

 

  getQues(){
    // let name=this.authService.getName()
   console.log('this is the name->',this.name)
   
if(this.name=='Atest'){
  
  this.inst.giveAtestId(this.id,this._id,this.topic).subscribe((res)=>{
    console.log(res)
    this.router.navigate(['practice/portal/aportal/asolve'],{
      queryParams:{id:this.id,name:this.topic,duration:this.duration,maxMark:this.maxMark,index:this.index,portal:this.name,compId:res.id}
    });
  });
  }
  else
  {
    this.inst.giveCtestId(this.id,this._id,this.topic).subscribe((res)=>{
      console.log(res)
      this.router.navigate(['practice/portal/cportal/csolve'],{
        queryParams:{id:this.id,name:this.topic,duration:this.duration,maxMark:this.maxMark,index:this.index,portal:this.name,compId:res.id}
      });
    })
  }
} 

ngOnDestroy(): void {
  // console.log('destroy===================')
  window.onbeforeunload = function (event) {
    var message = 'Important: Please click on \'Save\' button to leave this page.';
    if (typeof event == 'undefined') {
        event = window.event;
    }
    if (event) {
        event.returnValue = message;
    }
    return message;
};
}

}