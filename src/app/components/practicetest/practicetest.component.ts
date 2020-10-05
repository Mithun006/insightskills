import { Component, OnInit, Injectable, OnDestroy, Inject } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { GlobalPracticeSummary } from 'src/app/models/global-data';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { PacticeService } from './practice.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TempComponent } from '../temp/temp.component';




@Component({
  selector: 'app-practicetest',
  templateUrl: './practicetest.component.html',
  styleUrls: ['./practicetest.component.css']
})
@Injectable({providedIn:"root"})
export class PracticetestComponent implements OnInit  {
globalPractice:GlobalPracticeSummary[];
golabal:GlobalPracticeSummary[];
public practice
message='Practice Test'
status:any;
topic:any;
difficulty:any;
filterdata:any;
solved=true;
solvedData;
check=[];
count1;
count2;
filteringdata:any;
allcaught=false;
image1:string='assets/image/all.png';
public loading=false;
dummy;
unlock=[[],[]]
unlockk=true
j=0;
k=0;
pleaseUnlock=[[],[]]
filters={}
z=1
len;
p=0;
qtopics=[
  {topicName:'Number systems'},
  {topicName:'Averages'},
  {topicName:'Ratios and Proportions'},
  {topicName:'Partnership'},
  {topicName:'Percentages'},
  {topicName:'Profit & Loss'},
  {topicName:'Ages'},
  {topicName:'Venn diagram'},
  {topicName:'Allegation & Mixture'},
  {topicName:'Time & work, Pipes & Cisterns'},
  {topicName:'Probability'},
  {topicName:'Permutation & Combinations'},
  {topicName:'Simple interest and Compound interest'},
  {topicName:'Time, Speed & Distance'},
  {topicName:'Boats & Stream'},
  {topicName:'Algebra'},
  {topicName:'Menstruations'},
  {topicName:'Log'},
  {topicName:'Data interpretations'},

]
ltopic=[
  {topic:'Clocks & Calendar'},
  {topic:'Series'},
  {topic:'Blood relations'},
  {topic:'Directions'},
  {topic:'Chain rule'},
  {topic:'Coding & Decoding'},
  {topic:'Seating arrangements'},
  {topic:'Syllogism'},
  {topic:'Mirror and water'},
  {topic:'Data sufficiency'},
  {topic:'Puzzles'},
  {topic:'Paper folding & Cutting'},
  {topic:'Analogies'},
  {topic:'Cubes & Dice'},
]  
  constructor(private authService:AuthService,private router:Router,private route:ActivatedRoute,private practiceTest:PacticeService,public dialog: MatDialog) { }

  ngOnInit(): void {
    // this.loading=true
    this.practiceTest.getPractice().subscribe(res=>{
      console.log(res);
      this.practice=res['result']
      this.count1=this.practice.length; 
      console.log(this.count1)  
      this.practiceTest.getSolved().subscribe(res=>{
        console.log(res); 
        this.solvedData=res;
        
       for(let i=0;i<this.solvedData.length;i++){
         console.log(this.solvedData[i].question)
         if(this.z%10===0){
           console.log('hello')
           this.k=0;
           this.j++
           this.unlock[this.j][this.k]=this.solvedData[i].question
           this.z++;
           this.k++;
           console.log(this.unlock)
         }
         else{
          //  console.log(this.solvedData[i].question)
           this.unlock[this.j][this.k]=this.solvedData[i].question;
           this.k++
           this.z++;
           console.log(this.unlock)
        }
      
         }
       
          // this.len=this.unlock[0].length
          console.log(this.unlock.length)
      //  for(let i=0;i<this.unlock.length;i++){
      //    if(this.unlock[i].length===9){
      //      console.log('dae work agu da',this.unlock[i],this.unlock[i].length)

      //      for(let j=0;j<this.unlock[this.p].length;i++){
      //        this.pleaseUnlock[this.p][j]=true
      //      }
      //    }
      //   //  else{
      //   //    this.pleaseUnlock[i][]=false
      //   //  }
      //    this.p++;
      //  }


        this.applyFilters(); 
        this.fun();
      })
    })
  }

  private applyFilters(){
    this.filterdata=_.filter(this.practice,_.conforms(this.filters));
    console.log(this.filterdata)
    // console.log(this.filterdata.length);
    if(this.filterdata.length==0){
      // console.log('hai')
      this.allcaught=true;
    }
    else{
      // console.log('hello');
      this.allcaught=false;
    }
  }

  filterExact(property:string,rule:any){
    
    
    this.filters[property]=val=>val==rule
    this.applyFilters();
    this.fun();
    
  }

 


removeFilter(property:string){
  delete this.filters[property]
  this[property]=null;
  this.applyFilters();

}

solve(id:string){
  let solving=[]
  this.filterdata.forEach(res=>{
    if(res.status==="Unsolved"){
      solving.push(res._id)
    }
  })
  console.log(solving)
  let cs=[];
  let index=0;
 for(let a in this.filterdata){
   if(this.filterdata[a].status!='Solved'){
     cs[index]=this.filterdata[a]._id;  
     index++;
   }
 }

      this.authService.getElement(id,cs);
      this.authService.getstatusbar(this.message);
     // this.authService.givefilterid(this.filterdata._id);
      this.router.navigate(['practice/practicetest/solve'],{
        queryParams:{id:id,solving:solving,unlock:this.k}
      });
    }

    fun(){
    //  this.check=[]
      for(let i=0;i<this.filterdata.length;i++){
        for(let j=0;j<this.solvedData.length;j++){
          if(this.filterdata[i]._id===this.solvedData[j].question){
            this.check[i]=true;
            this.filterdata[i].status='Solved';
          }
          else{
            this.check[i]=false;
          }

        }
        
      }
      console.log(this.filterdata)
    }


    openDialog(id){
      this.dialog.open(TempComponent , {
        data: {
          data:this.practice,
          id:id,
          solved:this.solvedData
        
        }
      });
    
      console.log(id)
    }
}






