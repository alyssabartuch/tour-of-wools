import { Component, OnInit, Input } from '@angular/core';
import { Wool } from '../wool';

@Component({
  selector: 'app-wool-detail',
  templateUrl: './wool-detail.component.html',
  styleUrls: ['./wool-detail.component.css']
})
export class WoolDetailComponent implements OnInit {
    @Input() wool: Wool;

    constructor() { }

    ngOnInit() {
    }

}
