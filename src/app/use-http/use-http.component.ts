import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-use-http',
  templateUrl: './use-http.component.html',
  styleUrls: ['./use-http.component.css']
})
export class UseHttpComponent implements OnInit {
  public comments:any=[];
  public WebApiData:any="";
  

  public ShowComments(){
    var request=this.http.get("https://jsonplaceholder.typicode.com/comments").toPromise();
    request.then((data)=> this.comments = data);
    
  }
  public AccessWebApi(){
    var request=this.http.get("https://localhost:7245/allnames").toPromise();
    request.then((data)=> this.WebApiData=data);
    
  }
  constructor(public http:HttpClient) { }

  ngOnInit(): void {
  }

}
