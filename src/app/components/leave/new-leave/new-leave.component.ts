import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-leave',
  templateUrl: './new-leave.component.html',
  styleUrls: ['./new-leave.component.css']
})
export class NewLeaveComponent {
  leaveForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.leaveForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      leaveType: ['', Validators.required],
      position: ['', Validators.required],
      dateRange: this.fb.group({
        startDate: ['', Validators.required],
        endDate: ['', Validators.required],
      }),
      note: [''],
    });
  }

  onSubmit() {
    if (this.leaveForm.valid) {
      // Handle the form submission logic here
      console.log('Leave request submitted:', this.leaveForm.value);
    }
  }
}
