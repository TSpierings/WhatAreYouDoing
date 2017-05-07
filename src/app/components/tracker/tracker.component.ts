import { Component, OnInit } from '@angular/core';
import { Activity } from '../../interfaces/activity';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss']
})
export class TrackerComponent implements OnInit {

  private confirmDelete: boolean = false;
  private activityToBeDeleted: Activity;

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

  onToggleActive(activity: Activity) {
    this.activities.filter(x => x != activity).map(x => {
      x.active = false;
    });
  }

  addNew(activity: Activity) {
    console.log(JSON.stringify(activity));
    this.activities.push(activity);
  }

  onDeleteActivity(activity: Activity) {
    this.activityToBeDeleted = activity;
    this.confirmDelete = true;
  }

  confirmationResult(result: boolean) {
    if(result) {
      this.activities = this.activities.filter(x => x != this.activityToBeDeleted);
    }

    this.confirmDelete = false;
  }
}
