import { Component, OnInit } from '@angular/core';
import { Wool } from '../wool';
import { WOOLS } from '../mock-wool-list';

@Component({
  selector: 'app-wools',
  templateUrl: './wools.component.html',
  styleUrls: ['./wools.component.css']
})
export class WoolsComponent implements OnInit {


    wools = WOOLS;

    selectedWool: Wool;

    
    constructor() { }

    ngOnInit() {
    }

    onSelect(wool: Wool): void {
        this.selectedWool = wool;
    }

}
