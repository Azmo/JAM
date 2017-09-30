import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-campervan',
  templateUrl: './campervan.component.html',
  styleUrls: ['./campervan.component.css'],
})
export class CampervanComponent implements OnInit {
  van: FirebaseObjectObservable<any>;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.van = this.db.object(`/vans/${localStorage.getItem('currentUserId')}`);
  }

}
