import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { WoolsComponent } from './wools/wools.component';
import { WoolDetailComponent } from './wool-detail/wool-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    WoolsComponent,
    WoolDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
