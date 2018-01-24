import { Component, OnInit } from '@angular/core';
import { Wool } from '../wool';
import { WoolService } from '../wool.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  wools: Wool[] = [];

  constructor(private woolService: WoolService) { }

  ngOnInit() {
    this.getWools();
  }

  getWools(): void {
    this.woolService.getWools()
      .subscribe(wools => this.wools = wools.slice(1, 5));
  }
}
