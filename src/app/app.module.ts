import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { WoolsComponent } from './wools/wools.component';
import { WoolDetailComponent } from './wool-detail/wool-detail.component';
import { WoolService } from './wool.service';
import { MessagesComponent } from './messages/messages.component';


@NgModule({
  declarations: [
    AppComponent,
    WoolsComponent,
    WoolDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ WoolService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
