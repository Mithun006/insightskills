import {Component, OnInit} from '@angular/core';

import {lservice} from './leaderboard.service'


@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  elements
  constructor(private leaderboard:lservice) { }

ngOnInit(): void {
  this.leaderboard.getLeaderboard().subscribe(res=>{
    // console.log(res)
    
    this.elements=res
    this.elements.forEach(res => {
      res.rank=0   
    });
   for(let i=0;i<this.elements.length;i++){
     this.elements[i].rank=i+1
   }
    

    
    
  })
  
}
headElements = ['Rank', 'First Name', 'Last Name', 'Overall Score'];

  
}
  

  



  






