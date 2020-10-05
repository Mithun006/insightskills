import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-aportal',
  templateUrl: './aportal.component.html',
  styleUrls: ['./aportal.component.css']
})
export class AportalComponent implements OnInit {
  ngOnInit(){}
}