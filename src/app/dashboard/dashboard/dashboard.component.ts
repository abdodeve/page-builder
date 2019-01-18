import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from "jquery";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

declare const require: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  constructor(
    private activatedroute: ActivatedRoute,
    private router: Router
  ) { 

  }

  ngOnInit() {
    console.log("dashboard");
  }

  ngAfterViewInit() {
  }

}