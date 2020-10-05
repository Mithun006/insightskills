import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';




@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})

export class PracticeComponent implements OnInit{
  [x: string]: any;
  solve() {
    throw new Error("Method not implemented.");
  }
  UserIsAuthenticated=false;

  
  
  constructor(private authService:AuthService,private _snackBar:MatSnackBar ){}

  ngOnInit(){
    
    this.UserIsAuthenticated=this.authService.getIsAuth();
    // console.log(this.UserIsAuthenticated);
    
  }
  qtopics=[
    {topicName:'Number systems',image:'../../../assets/image/qtopic/number.png' },
    {topicName:'Averages',image:'../../../assets/image/qtopic/average.png' },
    {topicName:'Ratios and Proportions',image:'../../../assets/image/qtopic/ratio.png' },
    {topicName:'Partnership',image:'../../../assets/image/qtopic/friends.png' },
    {topicName:'Percentages',image:'../../../assets/image/qtopic/tax.png' },
    {topicName:'Profit & Loss',image:'../../../assets/image/qtopic/loss.png' },
    {topicName:'Ages',image:'../../../assets/image/qtopic/old-man.png' },
    {topicName:'Venn diagram',image:'../../../assets/image/qtopic/venn-diagram.png' },
    {topicName:'Allegation & Mixture',image:'../../../assets/image/qtopic/chemistry.png' },
    {topicName:'Time & work, Pipes & Cisterns',image:'../../../assets/image/qtopic/hourglass.png' },
    {topicName:'Probability',image:'../../../assets/image/qtopic/probability.png' },
    {topicName:'Permutation & Combinations',image:'../../../assets/image/qtopic/various.png' },
    {topicName:'Simple interest and Compound interest',image:'../../../assets/image/qtopic/interest.png' },
    {topicName:'Time, Speed & Distance',image:'../../../assets/image/qtopic/distance.png' },
    {topicName:'Boats & Stream',image:'../../../assets/image/qtopic/ship.png' },
    {topicName:'Algebra',image:'../../../assets/image/qtopic/algebra.png' },
    {topicName:'Menstruations',image:'../../../assets/image/qtopic/speed.png' },
    {topicName:'Log',image:'../../../assets/image/qtopic/log-file.png' },
    {topicName:'Data interpretations',image:'../../../assets/image/qtopic/folder.png' },

  ]
  
  ltopic=[
    {topic:'Clocks & Calendar',image:'../../../assets/image/ltopics/calendar.png'},
    {topic:'Series',image:'../../../assets/image/ltopics/maths.png'},
    {topic:'Blood relations',image:'../../../assets/image/ltopics/blood.png'},
    {topic:'Directions',image:'../../../assets/image/ltopics/google-maps.png'},
    {topic:'Chain rule',image:'../../../assets/image/ltopics/distribution.png'},
    {topic:'Coding & Decoding',image:'../../../assets/image/ltopics/encoding.png'},
    {topic:'Seating arrangements',image:'../../../assets/image/ltopics/rest.png'},
    {topic:'Syllogism',image:'../../../assets/image/ltopics/vendor.png'},
    {topic:'Mirror and water',image:'../../../assets/image/ltopics/water.png'},
    {topic:'Data sufficiency',image:'../../../assets/image/ltopics/folder.png'},
    {topic:'Puzzles',image:'../../../assets/image/ltopics/solution.png'},
    {topic:'Paper folding & Cutting',image:'../../../assets/image/ltopics/paper.png'},
    {topic:'Analogies',image:'../../../assets/image/ltopics/analog.png'},
    {topic:'Cubes & Dice',image:'../../../assets/image/ltopics/rubik.png'},
  ]  
    authservice: any;

 

  

}
