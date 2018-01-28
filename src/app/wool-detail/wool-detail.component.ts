import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Wool } from '../wool';
import { WoolService }  from '../wool.service';

@Component({
  selector: 'app-wool-detail',
  templateUrl: './wool-detail.component.html',
  styleUrls: ['./wool-detail.component.css']
})
export class WoolDetailComponent implements OnInit {
    @Input() wool: Wool;

    constructor(
        private route: ActivatedRoute,
        private woolService: WoolService,
        private location: Location) { }

    ngOnInit() {
        this.getWool();
    }

    getWool(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.woolService.getWool(id).subscribe(wool => this.wool = wool);
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.woolService.updateWool(this.wool).subscribe(() => this.goBack());
    }
}
