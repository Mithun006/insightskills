import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data) {}
  name=this.data
  display;
  solving

  ngOnInit(): void {
    console.log(this.name)
   for(let i=0;i<this.name.data.length;i++){
     if(this.name.id===this.name.data[i]._id){
       this.display=this.name.data[i];
     }
   }

   for(let i=0;i<this.name.solved.length;i++){
     if(this.name.id===this.name.solved[i].question){
       this.solving=this.name.solved[i].answer
     }
   }
   


  }


}
