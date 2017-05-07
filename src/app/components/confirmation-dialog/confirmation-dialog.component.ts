import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {

  @Input() text: string;
  @Output() result = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onYes() {
    this.result.emit(true);
  }

  onNo() {
    this.result.emit(false);
  }
}
