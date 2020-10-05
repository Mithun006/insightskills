import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { GlobalPracticeTest } from 'src/app/models/global-data';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Solve } from './solve.service';
import { update } from 'lodash';

@Component({
  selector: 'app-solve',
  templateUrl: './solve.component.html',
  styleUrls: ['./solve.component.css']
})
export class SolveComponent implements OnInit{
  public isWrong=false;
  public isTrue=false;
   public isempty=false;
   public favoriteSeason:string;
   public message;
   public count=0;
   public scorePoints;
   public fillid;
   public index;
   public loading=false;
   public data;
   OverallCount=0;
   updatedPractice;
   solving;
   unlock;
   nextSolving;
global:GlobalPracticeTest[];
nextQues;
practice;
_id;
  
  constructor(private authService:AuthService,private router:Router,private route:ActivatedRoute,private solve:Solve){}
  ngOnInit() {
    this.route.queryParams.subscribe(res=>{

      console.log(res.id,res.solving)
      this._id=res.id;
      this.solving=res.solving
      this.unlock=res.unlock
    // this.authService.givePracticeId(res.id)
    })
    this.solve.getPractice().subscribe(res=>{
      console.log(res)
      this.updatedPractice=res['result'];
      this.nextQues=res['result']
      const dummy=res['result']
      console.log(dummy[0]._id,this._id)

      for(let i=0;i<dummy.length;i++){
        
        if(dummy[i]._id===this._id){
          console.log('came')

          this.practice=dummy[i]
          console.log(this.practice)
        }
      }
      // console.log(this.practice)
    
    })
    
this.solve.getSolved().subscribe(res=>{
  console.log(res)
  this.data=res
})
    
    // this.authService.getSolve().subscribe(res=>{
    //   // this.loading=true
    // console.log(res);
    // this.practice=res['practiceQuestions'];
    // this.loading=false;
    // });err=>{
    //   this.loading=false
    // }
    this.authService.getstatusbar_1().subscribe(res=>{
      this.message=res;
      console.log(this.message);
    })
    // this.fillid=this.authService.getFilterids();
    // // console.log(this.fillid);
    // this.data=this.fillid.split(',')
    // console.log(this.data);

  }
checkanswer(){
  if(this.favoriteSeason===''){
    this.isempty=true

  }
  this.solving.forEach((res,index)=>{
    if(res===this.practice._id){
      this.solving.splice(index,index+1)
    }
  })
  let unlock=+this.unlock
  
  
  
  if(this.favoriteSeason===this.practice.question.ans){
    this.scorePoints=10;
    ++unlock;
    this.nextSolving=unlock
    console.log(unlock)
    const score={
      question:this.practice._id,
      answer:this.favoriteSeason
    }

    this.solve.updatePractice(score).subscribe(res=>{
      this.isTrue=true
    },err=>{
      this.isWrong=true
    })
  }
  else{
    this.scorePoints=0;
    ++unlock
    this.nextSolving=unlock
    console.log(unlock)
    const score={
      question:this.practice._id,
      answer:this.favoriteSeason
    }
    this.solve.updatePractice(score).subscribe(res=>{
      this.isTrue=true
    },err=>{
      this.isWrong=true
    })
    
  }
}


next(){
  this.isTrue=false
  this.favoriteSeason='';
  if(this.solving[0]===undefined){
    console.log('Nothing to Show')

  }
  else{

    const queryParams:Params={id:this.solving[0],unlock:this.nextSolving};
    this.router.navigate(
      [],
      {
        relativeTo:this.route,
        queryParams:queryParams,
        replaceUrl: true,
        queryParamsHandling: 'merge'
      }
    )
    console.log(this.solving[0])
    this.nextQues.forEach(res=>{
      if(res._id===this.solving[0]){
        this.practice=res;
      }
    })
  }
}

wrong(){
  this.isWrong=false
}
}









