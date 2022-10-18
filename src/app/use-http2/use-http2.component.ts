import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-use-http2',
  templateUrl: './use-http2.component.html',
  styleUrls: ['./use-http2.component.css']
})
export class UseHttp2Component implements OnInit {
  public users:any=[];
  http: any;
  public ShowUsers(){
    var request=this.http.get("https://jsonplaceholder.typicode.com/users").toPromise();
    request.then((data: any)=> this.users = data);
  }
  constructor(public http2:HttpClient) { }

  ngOnInit(): void {
  }

}
