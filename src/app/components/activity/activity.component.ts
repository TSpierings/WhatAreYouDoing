import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Activity } from '../../interfaces/activity';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  @Input() activity: Activity;
  @Output() toggleActive = new EventEmitter();

  private isActive: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.activity.active = !this.activity.active;
    this.toggleActive.emit(this.activity);
  }
}
