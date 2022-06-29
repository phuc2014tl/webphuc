import { Component, OnInit } from '@angular/core';
import {
  EVENTSNEXTMONTH,
  EVENTSTHISMONTH,
  NEXTEVENTS,
  TASKSINPROGRESS,
} from 'src/app/shares/taskinprogress-dashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  taskinprogress = TASKSINPROGRESS;
  nextevent = NEXTEVENTS;
  eventthismonth = EVENTSTHISMONTH;
  eventnextmonth = EVENTSNEXTMONTH;
  constructor() {}

  ngOnInit(): void {}
}
