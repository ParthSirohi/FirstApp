import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetComponent } from './greet/greet.component';
import { BindingsComponent } from './bindings/bindings.component';
import { FormsModule } from '@angular/forms';
import { IfComponent } from './if/if.component';
import { ReversePipe } from './reverse.pipe';
import { UsePipesComponent } from './use-pipes/use-pipes.component';
import { SearchPipePipe } from './search-pipe.pipe';
import { UseSvcComponent } from './use-svc/use-svc.component';
import { UseHttpComponent } from './use-http/use-http.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { UseHttp2Component } from './use-http2/use-http2.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetComponent,
    BindingsComponent,
    IfComponent,
    ReversePipe,
    UsePipesComponent,
    SearchPipePipe,
    UseSvcComponent,
    UseHttpComponent,
    UseHttp2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
