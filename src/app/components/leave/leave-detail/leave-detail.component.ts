import {Component, EventEmitter,Inject , Input, Output} from '@angular/core';
import { Leave } from 'src/app/api/models';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-leave-detail',
  templateUrl: './leave-detail.component.html',
  styleUrls: ['./leave-detail.component.css']
})
export class LeaveDetailComponent {
  @Input() leave!: Leave;
  @Output() approve = new EventEmitter<void>();
  @Output() decline = new EventEmitter<void>();



  constructor(@Inject(MAT_DIALOG_DATA) public data: { leave: Leave }) {
    this.leave = data.leave;
  }

  // Implement methods for approve and decline actions
  approveLeave(): void {
    this.approve.emit();
  }

  declineLeave(): void {
    this.decline.emit();
  }

  closeModal(): void {
    // Implement any additional logic before closing the modal
  }
}
