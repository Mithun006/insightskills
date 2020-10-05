import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {
topics=[];
topic

  constructor(private activateRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRouter.queryParams.subscribe(res=>{
      if(res.topic==='qtopics'){
        this.topic='Quantitative Apptitude'
        this.load_qtopics();
      }
      else{
        this.topic='Logical Reasoning'
        this.load_ltopics();
      }
    })
  }

  load_qtopics(){
    this.topics=[
      {topicName:'Number systems'},
      {topicName:'Averages' },
      {topicName:'Ratios and Proportions'},
      {topicName:'Partnership'},
      {topicName:'Percentages'},
      {topicName:'Profit & Loss'},
      {topicName:'Ages'},
      {topicName:'Venn diagram'},
      {topicName:'Allegation & Mixture' },
      {topicName:'Time & work, Pipes & Cisterns' },
      {topicName:'Probability'},
      {topicName:'Permutation & Combinations' },
      {topicName:'Simple interest and Compound interest'},
      {topicName:'Time, Speed & Distance'},
      {topicName:'Boats & Stream'},
      {topicName:'Algebra' },
      {topicName:'Menstruations'},
      {topicName:'Log'},
      {topicName:'Data interpretations'},
  
    ]
  
  }

  load_ltopics(){
    this.topics=[
    {topicName:'Series'},
    {topicName:'Clocks & Calendar'},
    {topicName:'Blood relations'},
    {topicName:'Directions'},
    {topicName:'Chain rule'},
    {topicName:'Coding & Decoding'},
    {topicName:'Seating arrangements'},
    {topicName:'Syllogism'},
    {topicName:'Mirror and water'},
    {topicName:'Data sufficiency'},
    {topicName:'Puzzles'},
    {topicName:'Paper folding & Cutting'},
    {topicName:'Analogies'},
    {topicName:'Cubes & Dice'},
      
    ]
  }
}
