import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Svc1Service {
  public showFbNotifications(){
    return ["New Friend Request","Post was liked "];
  }
  public getCommentsForPost(postId:number){
    
  }

  constructor() { }
}
