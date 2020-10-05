import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Confirmation } from './comfirmation.service';


@Component({
  selector: 'app-comfirmation',
  templateUrl: './comfirmation.component.html',
  styleUrls: ['./comfirmation.component.css']
})
export class ComfirmationComponent implements OnInit {
token
  constructor(private route:ActivatedRoute,private confirmation:Confirmation ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params.id);
     
      this.confirmation.verify(params.id);
    });
    
  }

}
