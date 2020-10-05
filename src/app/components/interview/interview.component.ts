import { Component, OnInit } from '@angular/core';
import { Interview } from './interview.service';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})
export class InterviewComponent implements OnInit {
Test
Solved;
score=[];
check=[];
startTime=[];
endTime=[];
testStatus=false;
testStstus_text='Take Test';
i;
noofq
enableResult=false;
name='Atest'
math=Math;
text='A new private window will be open. Click start to take the test';
finished=false;
  constructor(private interview:Interview) { }

  ngOnInit(): void {
    this.interview.getATest().subscribe(res=>{
      console.log(res);
      this.Test=res['result'];
      this.interview.isSolvedaTest().subscribe(res=>{
        this.Solved=res['result'];
        this.status();
        this.fun();
      })
      

    })

  }
  status(){
    const d=new Date()
    for(let i=0;i<this.Test.length;i++){
      this.endTime[i]=new Date(this.Test[i].test.test.endDate)
      this.startTime[i]=new Date(this.Test[i].test.test.startDate)
   }
   console.log(this.startTime[0].getHours(),d.getHours())
   console.log(this.endTime[0].getHours())
   for(let i=0;i<this.Test.length;i++){
     if(this.startTime[i].getUTCFullYear()===d.getFullYear()){
       
       if(this.startTime[i].getMonth()+1===d.getMonth()+1){
         if(this.startTime[i].getDate()===d.getDate()){
           if(this.startTime[i].getHours()===d.getHours()){
             this.testStatus=false
             this.testStstus_text='Take Test'
           }
           else if(this.startTime[i].getHours()>d.getHours()){
             this.testStatus=true
             this.testStstus_text='Not Started'
             console.log('test did not start')
           }
           else if(this.startTime[i].getHours()<d.getHours()){
            this.testStatus=false
            this.testStstus_text='Take Test'
            console.log('start test')
  
           }
           else{
             this.testStatus=true
             this.testStstus_text='Expired'
             console.log('test expires');
           }
         }
         else if(this.startTime[i].getDate()>d.getDate()){
           this.testStatus=true
             this.testStstus_text='Not Started'
           console.log('test did not start')
         }
         else{
           if(this.endTime[i].getDate()===d.getDate()){
             if(this.endTime[i].getHours()===d.getHours()){
               this.testStatus=true
             this.testStstus_text='Expired'
               console.log('test expired')
             }
             else if(this.endTime[i].getHours()<d.getHours()){
               this.testStatus=true
             this.testStstus_text='Expired'
               console.log('expired')
             }
             else if(this.endTime[i].getHours()>d.getHours()){
              this.testStatus=false
            this.testStstus_text='Take Test'
              console.log('start')
            }
             else{
               this.testStatus=true
             this.testStstus_text='Expired'
               console.log('expired')
             }
           }
         }
       }
       else if(this.endTime[i].getMonth()+1===d.getMonth()+1){
         if(this.endTime[i].getDate()===d.getDate()){
           if(this.endTime[i].getHours()===d.getHours()){
             this.testStatus=true
             this.testStstus_text='Expired'
             console.log('test exppired')
           }
           else if(this.endTime[i].getHours()>d.getHours()){
             this.testStatus=false
             this.testStstus_text='Take Test'
             console.log('start')
           }
           else{
             this.testStatus=true
             this.testStstus_text='Expired'
             console.log('test expired')
           }
         }
         else if(this.endTime[i].getDate()>d.getDate()){
           this.testStatus=false
             this.testStstus_text='Take Test'
           console.log('start')
         }
         else{
           this.testStatus=true
             this.testStstus_text='Expired'
           console.log('test expird')
         }
  
       }
       else{
         this.testStatus=true
             this.testStstus_text='Expired'
         console.log('test expired')
       }
  
  
  
     }
   }
  
  }

  fun(){
    
 
      for(let i=0;i<this.Test.length;i++){
        for(let j=0;j<this.Solved.length;j++){
          if(this.Test[i].test._id===this.Solved[j].aTest){
            this.score[i]=this.Solved[j].score;
            this.check[i]=true;
          }
        }
      }
    
   
   }


   min(i){
   
    this.i=i;
     $('#exampleModalCenter').modal({
       keyboard:false,
       backdrop:'static'
     }) 
   }

   startTest(){
    this.enableResult=true;
    
      this.noofq=this.Test[this.i].test.test.questionID.length;
      this.text='Test is being in progress complete the test to check the progress';
      window.open("http://localhost:4200/practice/portal/aportal/instructions?testName="+this.Test[this.i].test.test.title+"&duration="+this.Test[this.i].test.test.durations+"&maxMark="+this.Test[this.i].test.test.maxmark+"&id="+this.Test[this.i].test._id+"&_id="+this.Test[this.i].test.test._id+"&name="+this.name+"&index="+this.i+"&noofq="+this.noofq,"examPortal","width="+screen.availWidth+",height="+screen.availHeight)
    
   }

}
