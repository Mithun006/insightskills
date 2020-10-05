import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import {Chart} from 'chart.js'
import { TestResult } from './testresult.service';




@Component({
  selector: 'app-testresult',
  templateUrl: './testresult.component.html',
  styleUrls: ['./testresult.component.css']
})
export class TestresultComponent implements OnInit {
  chart=null;
  mchart=null;
  wchart=null;
name;
atest;
ctest;
atemp;
Atest;
Ctest
Citest=[];
count1=0;
count2=0;
count3=0;
count4=0;
progress;
month=[];
per=[];
dailypro;
d=[];
data=[];
public loading=false;
date=Date
monthy=['January','Febraury','March','April','May','June','July','August','September','October','November','December']
  monPro: any;

  constructor(private authService:AuthService,private testresult:TestResult) { }

  

 
  ngOnInit(): void {
      // this.loading=true;

    this.authService.getDailyprogress().subscribe(res=>{
      //console.log(res);
      let date=res['dateArr'];
      let score=res['scoreArr'];
  
     for(let i=0;i<date.length;i++){
       this.d[i]=date[i];
       this.data[i]=score[i];
     }
      let dates=[];
      this.d.forEach((res)=>{
        dates.push(res);
      })
     // console.log('->',dates);
      let data=[];
      this.data.forEach((res)=>{
        data.push(res);
      })
//      console.log(data);

      this.chart=new Chart('canvas',{
        type:'line',
        data:{
          labels:dates,
          datasets:[
          {
            data:data,
            borderColor:'#3cba9f',
            fill:false

          }
        ]
        },
        options:{
          legend:{
            display:false
          },
          scales:{
            xAxes:[{
              display:true
            }],
            yAxes:[{
              display:true
            }]
          }
        }

      })
      
    });err=>{
      this.loading=false;
    }
    
    this.authService.getProgress().subscribe(res=>{
     console.log(res);
    let monthArr=res['monthArr'];
    let scoreArr=res['scoreArr']; 
   
     monthArr.sort((a,b) => a.toString().localeCompare(b.toString()));
     console.log(monthArr);
     let month=[];
     let data=[];
     let monthu=[];
     for(let i=0;i<monthArr.length;i++){
       month[i]=monthArr[i];
       data[i]=scoreArr[i];
     }
     month.forEach((res)=>{
       monthu.push(res.split("-"));
     })
     console.log('heloooo',monthu);
     let montho=[];
     monthu.forEach((res)=>{
       console.log('unna vitta ',res[0])
       montho.push(this.monthy[res[0]-1]);
      })
      
    
     let dataa=[]
     data.forEach((res)=>{
       dataa.push(res);
     })
    
     this.mchart=new Chart('acanvas',{
      type:'line',
      data:{
        labels:montho,
        datasets:[
        {
          data:dataa,
          borderColor:'#3cba9f',
          fill:false

        }
      ]
      },
      options:{
        legend:{
          display:false
        },
        scales:{
          xAxes:[{
            gridLines:{

              display:true
            }
          }],
          yAxes:[{
            gridLines:{

              display:true
            }
          }]
        }
      }

    })


        });err=>{
          this.loading=false;
        }
   this.authService.getweeklyProgress().subscribe(res=>{
     console.log(res);
     let weekArr=res['weekArr'];
     let scoreArr=res['scoreArr'];
     let week=[];
     let score=[];
     for(let i=0;i<weekArr.length;i++){
      week[i]=weekArr[i];
      score[i]=scoreArr[i];
    }
    let weeky=[];
    week.forEach((res)=>{
      weeky.push(res);
     })
     
   
    let data=[]
    score.forEach((res)=>{
      data.push(res);
    })
   
    this.wchart=new Chart('ccanvas',{
     type:'line',
     data:{
       labels:weeky,
       datasets:[
       {
         data:data,
         borderColor:'#3cba9f',
         fill:false

       }
     ]
     },
     options:{
       legend:{
         display:false
       },
       scales:{
         xAxes:[{
           gridLines:{

             display:true
           }
         }],
         yAxes:[{
           gridLines:{

             display:true
           }
         }]
       }
     }
   })
   });err=>{
     this.loading=false;
   }
  
  this.testresult.getCResult().subscribe(res=>{
    // console.log(res)
    this.Ctest=res['data'];
     
    this.testresult.getIsCtest().subscribe(res=>{
      // console.log(res);
      this.ctest=res['result'];
      this.ctest=this.ctest.reverse();
      this.func();
      
      
})
    
  })
  this.testresult.getAResult().subscribe((res)=>{
    console.log(res['data'])
    this.Atest=res['data']
    this.Atest=this.Atest.reverse()
   
  })
  this.testresult.getIsAtest().subscribe(res=>{
    console.log(res);
     this.atest=res['result']
     this.atest=this.atest.reverse();
     this.funa()
     
    })
  // this.testresult.getAResult().subscribe(res=>{
  //   console.log(res)
  //   this.Atest=res['data'];
  //   this.testresult.getIsAtest().subscribe(res=>{
  //     console.log(res);
  //      this.atest=res['result']
  //      this.atest=this.atest.reverse();
  //      this.funa()
       
  //     })
   
  // })


 
   
}

// calC(){
//   let len=this.ctest.length;
//   return len;
// }

// calA(){
//   let len=this.atest.length;
 
//   return len;
// }

// calc(){
//   let len=this.Ctest.length;
//   return len;
// }

// cala(){
//   let len=this.Atest.length;
//   return len;
// }


  func(){
    for(let i=0;i<this.ctest.length;i++){
      for(let j=0;j<this.Ctest.length;j++){
        if(this.Ctest[j]._id===this.ctest[i].testId){
          this.Ctest[i]=this.Ctest[j]; 
        }
      }
    }
  }

  funa(){
    for(let i=0;i<this.atest.length;i++){
      for(let j=0;j<this.Atest.length;j++){
        if(this.Atest[j]._id===this.atest[i].testId){
          this.Atest[i]=this.Atest[j];
        }
      }
    }
  }
  


}
