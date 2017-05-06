import { Component, OnInit } from '@angular/core';
import { Activity } from '../../interfaces/activity';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent implements OnInit {

  activities: Array<Activity> = ([
    {name: 'dev', active: false},
    {name: 'fe', active: false},
    {name: 'be', active: false},
    {name: 'doc', active: false},
    {name: 'coffee', active: false},
    {name: 'research', active: false},
  ]);

  constructor() { }

  ngOnInit() {
  }

}
