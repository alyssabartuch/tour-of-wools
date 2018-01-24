import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WoolsComponent }      from './wools/wools.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { WoolDetailComponent }  from './wool-detail/wool-detail.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: WoolDetailComponent },
    { path: 'wools', component: WoolsComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
