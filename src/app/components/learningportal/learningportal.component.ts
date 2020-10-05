import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-learningportal',
  templateUrl: './learningportal.component.html',
  styleUrls: ['./learningportal.component.css']
})
export class LearningportalComponent implements OnInit {

  constructor(private router:Router){}
  ngOnInit(): void {
  }

  qtopics(){
    this.router.navigate(['practice/learningportal/topics'],{
      queryParams:{topic:'qtopics'}
    })
  }

  ltopics(){
    this.router.navigate(['practice/learningportal/topics'],{
      queryParams:{topic:'ltopics'}
    })

  }

  
}
