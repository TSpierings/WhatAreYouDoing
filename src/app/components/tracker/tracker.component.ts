import { Component, OnInit, trigger, state, transition, animate, style, keyframes } from '@angular/core';
import { Activity } from '../../interfaces/activity';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss'],
  animations: [        
        trigger('activityState', [
            transition(':enter', [
              animate(500, keyframes([
                style({width: '0', opacity: '0'}),
                style({width: '*', opacity: '0'}),
                style({width: '*', opacity: '1'}),
              ]))
            ]),
            transition(':leave', [
              animate(500, keyframes([
                style({width: '*', opacity: '1'}),
                style({width: '*', opacity: '0'}),
                style({width: '0', opacity: '0'}),
              ]))
            ])            
        ])
    ]
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
