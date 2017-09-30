import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-campervan',
  templateUrl: './campervan.component.html',
  styleUrls: ['./campervan.component.css'],
})
export class CampervanComponent implements OnInit {
  van: FirebaseObjectObservable<any>;
  rvTypes = [
    'Caravan',
    'Hybrid',
    'Pop top',
    'Camper Trailer',
    'Tent Camper',
    'Fifth Wheel',
    'A Class',
    'B Class',
    'C Class',
    'Other',
  ];

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.van = this.db.object(`/vans/${localStorage.getItem('currentUserId')}`);
  }

}
