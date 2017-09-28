import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as moment from 'moment';

@Component({
    selector: 'app-home',
    templateUrl: './home.html',
    styleUrls: ['./home.css'],
})

export class HomeComponent implements OnInit {
    from: Date;
    until: Date;

    constructor(private db: AngularFireDatabase) { }

    ngOnInit() {
        this.from = new Date();
        this.until = new Date();
    }

}
