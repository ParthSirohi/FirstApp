import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {
  public pageName:string="Welcome Page";
  public GreetMsg:string= "Welcome to our exotic Angular App";

  constructor() { }

  ngOnInit(): void {
  }

}
