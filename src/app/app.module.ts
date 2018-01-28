// --- MODULES ---
import { AppRoutingModule } from './/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

// --- COMPONENTS ---
import { AppComponent } from './app.component';
import { WoolsComponent } from './wools/wools.component';
import { WoolDetailComponent } from './wool-detail/wool-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessagesComponent } from './messages/messages.component';

// --- SERVICES ---
import { InMemoryDataService }  from './in-memory-data.service';
import { MessageService } from './message.service';
import { WoolService } from './wool.service';


@NgModule({
  declarations: [
    AppComponent,
    WoolsComponent,
    WoolDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }
)
  ],
  providers: [ WoolService, MessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
