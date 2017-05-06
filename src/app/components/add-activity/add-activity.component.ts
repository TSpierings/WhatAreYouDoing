import { Component, OnInit, Output, EventEmitter, trigger, state, transition, animate, style, Input } from '@angular/core';
import { Activity } from '../../interfaces/activity';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.scss']
})
export class AddActivityComponent implements OnInit {

  @Output() confirmNewActivity = new EventEmitter();

  @Input() newName: string = '';

  constructor() { }

  ngOnInit() {
  }

  onFocusOut() {
    this.addNew();
  }

  onEnter() {
    this.addNew();
  }

  private addNew() {
    if(this.newName.trim().length > 0) {
      let act: Activity = {name: this.newName, active: false};
      this.confirmNewActivity.emit(act);
      this.newName = '';
    }
  }
}
