import { Component, OnInit } from '@angular/core';

import { Wool } from '../wool';
import { WoolService } from '../wool.service';

@Component({
  selector: 'app-wools',
  templateUrl: './wools.component.html',
  styleUrls: ['./wools.component.css']
})
export class WoolsComponent implements OnInit {

    selectedWool: Wool;

    wools: Wool[];

//The parameter simultaneously defines a private woolService property and identifies it as a WoolService injection site.
    constructor(private woolService: WoolService) { }

    ngOnInit() {
        this.getWools();
    }

    onSelect(wool: Wool): void {
        this.selectedWool = wool;
    }

//Function to retrieve the wools from the service.
//waits for the Observable to emit the array of heroes— which could happen now or several minutes from now.
//Then subscribe passes the emitted array to the callback, which sets the component's heroes property.
    getWools(): void {
        this.woolService.getWools().subscribe(wools => this.wools = wools);
    }

}
