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

    wool: Wool = {
        id: 1,
        name: 'Herding Cats',
        fiber: 'Superwash Targhee',
        month: 'March 2017'
    };



    constructor() { }

    ngOnInit() {
    }



}
