import { Component, OnInit, Input, Output } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { NotifierService } from 'angular-notifier';
import { Router, ActivatedRoute } from '@angular/router';
import {AcportalComponent} from '../acportal/acportal.component'
import { ACSolve } from './acsolve.service';
@Component({
  selector: 'app-acsolve',
  templateUrl: './acsolve.component.html',
  styleUrls: ['./acsolve.component.css']
})
export class AcsolveComponent implements OnInit {
  
  text='Click Submit to close the test !'
  private notifier: NotifierService;
  mudiala=false;
  ipo=false
name
title;
testId;
timeleft;
fivemin;
question;
no;
qno=[];
questions;
index=0;
counterr;
counter=0;
favoriteSeason;
options=[];
answers=[];
IsSubmit=false;
IsDisabled=true;
hours
seconds
minutes;
maxMark;
panitan=false
public loading=false;
compId;
i;
startDate;
portal
  constructor(private acsolve:ACSolve,notifier: NotifierService,private router:Router,private route:ActivatedRoute,private acportal:AcportalComponent,private acsolveservice:ACSolve) {
    this.notifier = notifier;

   }

  ngOnInit(): void {
    
    this.route.queryParams.subscribe(res=>{
      console.log(res)
      this.i=res.index
      this.maxMark=res.maxMark
      this.title=res.name;
      this.timeleft=res.duration*60;
      this.testId=res.id;
      this.fivemin=this.timeleft-300;
      this.compId=res.compId
      this.portal=res.portal
      // this.authService.atestId(this.testId)
      this.acfun();
    })
    let sdate=new Date();
    this.startDate=sdate
    this.hours = sdate.getHours();
    this.minutes = sdate.getMinutes();
    this.seconds = sdate.getSeconds();
  }

  acfun(){
    this.summa();
    this.neram();
  }
 

  shuffle(arr){
    console.log(arr);
    let ctr=arr.length,temp,index;
    while(ctr> 0){
        index=Math.floor(Math.random()*ctr)
        ctr--;
        temp = arr[ctr];
        arr[ctr] = arr[index];
        arr[index] = temp;
    }
    return arr;

  }
  convertSeconds(s){
    let min=Math.floor(s/60);
    let sec=s%60;
    return min.toLocaleString('en-us',{minimumIntegerDigits:2}) +':'+sec.toLocaleString('en-us',{minimumIntegerDigits:2});

  }

  public showNotification( type: string, message: string ) {
    
    this.notifier.notify( type, message );
  }


  next(){
    this.index++;
    this.favoriteSeason='';
    this.favoriteSeason=this.options[this.index];
      if(this.index >= 1){
        this.IsDisabled=false;
      }
  
      if(this.index==this.no-1){
        this.IsSubmit=true;
      }
      
  this.questions=this.question[this.index]['questionsId'];
  }

  previous(){
    this.index--;
    this.favoriteSeason='';
    this.favoriteSeason=this.options[this.index];
    if(this.index==0){
      this.IsDisabled=true;
    }
    if(this.index!=this.no-1){
      this.IsSubmit=false;
    }
    
  this.questions=this.question[this.index]['questionsId'];
  }
answer(){
  console.log(this.favoriteSeason)
  if(this.favoriteSeason===this.question[this.index].questionsId.ans){
    
    this.options[this.index]=this.favoriteSeason;
    this.answers[this.index]=this.question[this.index].score;
    console.log(this.question[this.index].score)
    console.log(this.answers[this.index])
  }
  else{
    this.options[this.index]=this.favoriteSeason;
    this.answers[this.index]=0;
    console.log(this.answers[this.index])

  }
}

checkanswer(){
  this.panitan=true
  let count=0
  for(let a of this.answers){
    if (a){
      count=count+a
    }
  }
let endate=new Date();
if(this.portal==='Atest'){

  let data={  
    startTime:this.startDate,
    endTime:endate,
    score:count,
    maxMark:this.maxMark,
    aTest:this.testId
  }
  this.acsolveservice.submitTest(this.compId,data).subscribe(res=>{
    this.mudiala=true
  })
}
else{
  let data={  
    startTime:this.startDate,
    endTime:endate,
    score:count,
    maxMark:this.maxMark,
    cTest:this.testId
  }
  this.acsolveservice.submitcTest(this.compId,data).subscribe(res=>{
    this.mudiala=true
  })

}

}

mudividu(){
  console.log('vanthiruchu da');  
  // this.authService.disableResult();
  this.acportal.checing();
   window.close()
}

summa(){
  this.acsolve.getCTest().subscribe(res=>{
    console.log(res['result'][this.i].test.test.questionID);
    this.question=this.shuffle(res['result'][this.i].test.test.questionID);
    console.log(this.question)
    this.no=this.question.length;
    console.log(this.no)
    for(let i=0;i<this.question.length;i++){
      console.log(i);
      this.qno[i]=i+1;
      this.options[i]=''
    }
    this.questions=this.question[this.index]['questionsId'];
    console.log(this.questions)
    // this.questions=this.questions['question']
    // console.log(this.questions['question']);
    // console.log(this.questions['question'].question);

  })
}

neram(){
  let intervalId = setInterval(() => {
    
    this.counterr= this.convertSeconds(this.timeleft - this.counter);
    this.counter++;
    if(this.counter==this.timeleft){

    
      clearInterval(intervalId);
      $("#exampleModalCenter").modal({
        keyboard:false,
        backdrop:'static'
      });
    } 
    if(this.counter==this.fivemin){
      
      this.showNotification('warning','Hey only 5 minutes left,Hurry up!');
    }
    
}, 1000);
}

q(i){
  this.favoriteSeason='';
  this.favoriteSeason=this.options[i];
  this.questions=this.question[i]['questionsId'];
  this.index=i;
  if(this.index >= 1){
   this.IsDisabled=false;
 }

 if(this.index==this.no-1){
   this.IsSubmit=true;
 }

 if(this.index==0){
   this.IsDisabled=true;
 }
 if(this.index!=this.no-1){
   this.IsSubmit=false;
 }
  
}
ngOnDestroy(): void {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
  console.log('destroy===================')
  window.onbeforeunload = function (event) {
    var message = 'Important: Please click on \'Save\' button to leave this page.';
    if (typeof event == 'undefined') {
        event = window.event;
        console.log('ithu')
    }
    if (event) {
        event.returnValue = message;
        console.log('athu')
    } 
    return message;
};
}
  

}
