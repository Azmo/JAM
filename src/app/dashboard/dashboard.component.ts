import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  dashboard: FirebaseObjectObservable<any>;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.dashboard = this.db.object(`/users/${localStorage.getItem('currentUserId')}/dashboard`);
  }

}
