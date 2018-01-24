import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WoolsComponent }      from './wools/wools.component';

const routes: Routes = [
  { path: 'wools', component: WoolsComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
