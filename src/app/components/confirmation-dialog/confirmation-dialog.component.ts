import { Component, OnInit, Input, Output, EventEmitter, trigger, state, transition, style, animate } from '@angular/core';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss'],
  animations: [
        trigger('fadeState', [
            state('active', style({opacity: '1'})),
            transition('active => inactive', [
              animate(100, style({opacity: '0'}))
            ])
        ])
    ]
})
export class ConfirmationDialogComponent implements OnInit {

  @Input() text: string;
  @Output() resultEvent = new EventEmitter();
  private result: boolean = false;
  private state: string = 'active';

  constructor() { }

  ngOnInit() {
  }

  onYes() {
    this.result = true;
    this.state = 'inactive';
  }

  onNo() {
    this.result = false;
    this.state = 'inactive';
  }

  animationDone(animEvent: any) {
    if(animEvent.toState === 'inactive') {
      this.resultEvent.emit(this.result);
    }
  }
}
