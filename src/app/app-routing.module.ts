import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GreetComponent } from './greet/greet.component';
import { BindingsComponent } from './bindings/bindings.component';
import { IfComponent } from './if/if.component';
import { UsePipesComponent } from './use-pipes/use-pipes.component';
import { UseSvcComponent } from './use-svc/use-svc.component';
import { UseHttpComponent } from './use-http/use-http.component';
import { UseHttp2Component } from './use-http2/use-http2.component';

const routes: Routes = [
  {path:'greet', component:GreetComponent},
  {path:"bindings", component:BindingsComponent},
  {path:"toggle", component:IfComponent},
  {path: "usePipes",component:UsePipesComponent},
  {path: "fbService", component:UseSvcComponent},
  {path: 'Http', component:UseHttpComponent},
  {path: 'Http2', component:UseHttpComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
