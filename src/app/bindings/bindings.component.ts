import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent implements OnInit {
  public name:string="Parth";
  public role:string="Analyst";
  public pplarray:any= [];
  public status:string="";

  public add(ctrl:any){
    this.pplarray.push({name:this.name, role:this.role,dp:"https://unsplash.it/45/45/?random"});
    var lastIndex=this.pplarray.length -1;
    var lastItem=this.pplarray[lastIndex];
    this.status=`User ${lastItem.name} added with Role ${lastItem.role}!`;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
